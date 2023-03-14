const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");
const app = require("../app");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "Anas",
  email: "anas@eample.com",
  password: "blackhat3",
  age: "30",
  tokens: [{ token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET) }],
};
beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should add user and return 201 status code", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Anas",
      email: "anassamer661@gmail.com",
      password: "blackhat3",
      age: "30",
    })
    .expect(201);

  //Assert that the database was changed corectly
  const user = await User.findById(response.body.user._id);

  expect(user).not.toBeNull();

  //Assertions about the response
  console.log(response.body.user);
  expect(response.body).toMatchObject({
    user: {
      name: "Anas",
      email: "anassamer661@gmail.com",
      age: 30,
    },
    token: user.tokens[0].token,
  });

  expect(user.password).not.toBe("blackhat3");
});

test("should login user and return 200 status code", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.tokens[1].token).toBe(response.body.token);
});

test("should not login user and return 400 status code", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "blackhat",
    })
    .expect(400);
});

test("should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

    const user = await User.findById(userOneId);
    expect(user).toBeNull();
});

test("should not delete account for unauthenticated user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});
