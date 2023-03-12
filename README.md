# Task Manager API

A RESTful API for managing tasks, users, and files using Node.js, Express.js, MongoDB, and Mongoose.

## Installation

To install this project, you need to have Node.js and MongoDB installed on your machine. Then follow these steps:

1. Clone this repository: `git clone https://github.com/AshrafSamir/task-manager-api.git`
2. Navigate to the project folder: `cd task-manager-api`
3. Install dependencies: `npm install`
4. Create a .env file in the root directory and add the following variables:
    - PORT: the port number for the server (e.g. 3000)
    - MONGODB_URL: the connection string for MongoDB (e.g. mongodb://localhost:27017/task-manager)
    - JWT_SECRET: a secret key for generating JSON web tokens (e.g. mysecretkey)
5. Start the server: `npm start`

## Usage

You can use any HTTP client (such as Postman or curl) to interact with the API endpoints. The base URL is `http://localhost:<PORT>` where <PORT> is the port number you specified in the .env file.

The API supports the following operations:

- Create a user: `POST /users` with a JSON body containing name, email, password, and age fields
- Login a user: `POST /users/login` with a JSON body containing email and password fields
- Logout a user: `POST /users/logout` with a valid Authorization header (Bearer token)
- Logout all sessions: `POST /users/logoutAll` with a valid Authorization header (Bearer token)
- Read profile: `GET /users/me` with a valid Authorization header (Bearer token)
- Update user: `PATCH /users/me` with a valid Authorization header (Bearer token) and a JSON body containing any of the name, email, password, or age fields
- Delete user: `DELETE /users/me` with a valid Authorization header (Bearer token)
- Upload avatar: `POST /users/me/avatar` with a valid Authorization header (Bearer token) and a form-data body containing an avatar field (file)
- Delete avatar: `DELETE /users/me/avatar` with a valid Authorization header (Bearer token)
- Get avatar: `GET /users/:id/avatar` where :id is the user ID
- Create a task: `POST /tasks` with a valid Authorization header (Bearer token) and a JSON body containing description and completed fields
- Read tasks: `GET /tasks` with a valid Authorization header (Bearer token) and optional query parameters for filtering (completed), sorting (sortBy), and pagination (limit, skip)
- Read task by ID: `GET /tasks/:id` where :id is the task ID and a valid Authorization header (Bearer token)
- Update task by ID: `PATCH /tasks/:id` where :id is the task ID and a valid Authorization header (Bearer token) and a JSON body containing any of the description or completed fields
- Delete task by ID: `DELETE /tasks/:id` where :id is the task ID and a valid Authorization header (Bearer token)

## Tests

To run tests, use the command `npm test`. This will run Jest and execute all test files in the tests folder.

To check code quality, use the command `npm run lint`. This will run ESLint and report any code style issues.