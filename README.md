# login-crud-users

API for CRUD and user login, with role-based privileges

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Folder Descriptions](#folder-descriptions)
- [Contributing](#contributing)
- [License](#license)

## Description
This repository contains an API for handling CRUD operations and user login functionalities with role-based access control. It is built using JavaScript and provides a foundation for user management in web applications.

## Features
- User authentication and authorization
- Role-based access control
- CRUD operations for user data
- Secure password handling

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jlio215/login-crud-users.git
   ```
2. Navigate to the project directory:
   ```bash
   cd login-crud-users
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Create a `.env` file in the root directory and configure the required environment variables (refer to the `.env.example` file).
2. Start the server:
   ```bash
   npm start
   ```
3. The API will be running on `http://localhost:3000`.

## Environment Variables
Ensure the following environment variables are set in your `.env` file:
- `PORT`: The port on which the server will run (default is 3000).
- `DB_CONNECTION`: Database connection string.
- `JWT_SECRET`: Secret key for JSON Web Token (JWT) signing.

## Endpoints
Refer to the `back-end-user-end-points-documentation.pdf` file for detailed information on available API endpoints and their usage.

## Project Structure
```
├── README
├── app.js
├── back-end-user-end-points-documentation.pdf
├── controllers
│   ├── Usuario.js
│   └── auth.js
├── db
│   └── connect-mongo.js
├── estructura_de_home.txt
├── helpers
│   └── jwt.js
├── middleware
│   ├── validate-jwt.js
│   └── validate-rol-admin.js
├── models
│   └── Usuario.js
├── package-lock.json
├── package.json
├── routes
│   ├── Usuario.js
│   └── auth.js
└── server.js

7 directories, 16 files
```

## Folder Descriptions
- **controllers**: Contains logic for handling requests and responses.
  - `Usuario.js`: Manages user-related operations.
  - `auth.js`: Manages authentication-related operations.
- **db**: Database connection setup.
  - `connect-mongo.js`: Configures MongoDB connection.
- **helpers**: Utility functions and helpers.
  - `jwt.js`: Functions related to JSON Web Tokens.
- **middleware**: Middleware for request processing.
  - `validate-jwt.js`: Validates JWT tokens.
  - `validate-rol-admin.js`: Validates admin role for access control.
- **models**: Defines data models.
  - `Usuario.js`: User data model.
- **routes**: API route definitions.
  - `Usuario.js`: Routes for user-related operations.
  - `auth.js`: Routes for authentication operations.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.