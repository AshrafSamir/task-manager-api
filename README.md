# Task Manager API

The RESTful API is built using Node.js, Express.js, MongoDB, and Mongoose and is designed to manage tasks, users, and files. The API follows RESTful principles and allows users to perform CRUD operations on the various resources using HTTP methods.

Authentication and Authorization have been implemented to ensure secure access to the API. Authentication is achieved using JSON Web Tokens (JWT), which are issued upon successful login and included in subsequent requests to authenticate the user. Authorization is implemented using middleware to check user roles and permissions before allowing access to certain routes.

Middleware has been used extensively throughout the API to provide additional functionality and security. Middleware includes features such as error handling, request validation, logging, and rate limiting.

The file structure of the API is organized to follow best practices for Node.js and Express.js. The API code is organized into controllers, models, and routes, with each file responsible for a specific aspect of the API's functionality.

To ensure the API's quality and reliability, unit tests have been written using Jest. These tests cover all aspects of the API, including testing routes, controllers, models, and middleware. The tests are designed to be run automatically on every code change using a Continuous Integration/Continuous Deployment (CI/CD) pipeline.

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
