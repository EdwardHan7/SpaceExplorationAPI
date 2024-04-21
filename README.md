# Space Exploration API

## Description
The Space Exploration API is a RESTful service designed for managing data related to space missions, spacecraft, and celestial bodies. It serves as a backend service that can be integrated into various space-related projects or applications, providing functionalities to create, retrieve, update, and delete information about space missions and celestial entities.

## Features
- **CRUD Operations**: Manage space missions, spacecraft, and celestial bodies through Create, Read, Update, and Delete operations.
- **MongoDB Database**: Uses MongoDB for persistent storage of space-related data.
- **Validation**: Ensures the integrity of the data with Joi validation.
- **Error Handling**: Robust error handling to provide clear error responses.

## Technologies
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A web application framework for Node.js, designed for building web applications and APIs.
- **MongoDB**: A NoSQL database used to handle large volumes of data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Joi**: A powerful schema description language and data validator for JavaScript.
- **Docker**: A platform for developing, shipping, and running applications inside containers.
- **Postman**: A tool for testing APIs, making it easier to develop and test RESTful services.

## Setup and Installation
To set up this project locally, follow the steps below:
1. **Clone the repository:**
   git clone https://github.com/yourgithubusername/space-exploration-api.git
2. **Clone the repository:**
   cd space-exploration-api
3. **Install dependencies:**
   npm install
4. **Set up a MongoDB database and ensure it is running.**
5. **Create a .env file in the root directory and update it with your MongoDB URI:**
   DB_URI=mongodb://localhost:27017/spaceExplorationDB
6. **Start the server:**
   npm start

## Using Docker
To containerize the application, follow these steps:
1. **Build the Docker image:**
   docker build -t space-exploration-api .
2. **Run the Docker container:**
   docker run -p 3000:3000 space-exploration-api

## Using Postman for API Testing
To test the API endpoints:
1. **Import the provided Postman collection located at /postman/SpaceExplorationAPI.postman_collection.json into Postman.**
2. **Ensure your server is running.**
3. **Send requests via Postman to test different endpoints.**

## How to Use
The API has several endpoints for managing space missions, spacecraft, and celestial bodies:
Space Missions:
1. **POST /api/spaceMissions - Create a new space mission**
2. **GET /api/spaceMissions - Retrieve all space missions**
3. **GET /api/spaceMissions/:id - Retrieve a space mission by ID**
4. **PUT /api/spaceMissions/:id - Update a space mission by ID**
5. **DELETE /api/spaceMissions/:id - Delete a space mission by ID**
Spacecraft:
1. **POST /api/Spacecraft - Create a new Spacecraft**
2. **GET /api/Spacecraft - Retrieve all Spacecraft**
3. **GET /api/Spacecraft/:id - Retrieve a Spacecraft by ID**
4. **PUT /api/Spacecraft/:id - Update a Spacecraft by ID**
5. **DELETE /api/Spacecraft/:id - Delete a Spacecraft by ID**
Celestial Bodies:
1. **POST /api/Spacecraft - Create a new celestial**
2. **GET /api/Spacecraft - Retrieve all celestial**
3. **GET /api/Spacecraft/:id - Retrieve a celestial by ID**
4. **PUT /api/Spacecraft/:id - Update a celestial by ID**
5. **DELETE /api/Spacecraft/:id - Delete a celestial by ID**

## Contact Information
For more information or support, contact edwardhan456@gmail.com