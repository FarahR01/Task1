# Task1

## Project Description

Task1 is a Node.js application that fetches the latest articles from a WordPress site every hour and saves new articles into a MySQL database. This project demonstrates the use of Sequelize for database interaction, Axios for making HTTP requests, and node-cron for scheduling tasks. Additionally, it includes error handling middleware and is set up with Swagger for API documentation.

## Features

- **Fetch Articles:** Retrieves the latest articles from a WordPress site.
- **Save Articles:** Stores new articles into a MySQL database, ensuring no duplicates.
- **Scheduled Fetching:** Uses cron jobs to fetch and save articles every hour.
- **Error Handling:** Implements middleware to handle errors gracefully.
- **API Documentation:** Swagger integration for easy API documentation and testing.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- Axios
- node-cron
- Swagger
- APIDog


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FarahR01/Task1.git
   cd Task1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up the MySQL database:**
   ```sql
   show databases;
   CREATE DATABASE articlesDB;
    USE articlesDB;
   CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(50),
    author INT,
    format VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    content TEXT,
    status VARCHAR(50),
    slug VARCHAR(255) NOT NULL UNIQUE
    );
   ```
4.  **Environment Variables:**
```plaintext
   PORT=Your_PORT
    DB_USERNAME=Your_DBNAME
  DB_PASSWORD=Your_DBPassword
  DB_NAME=articlesdb
  DB_HOST=127.0.0.1

   ```
5. **Run the application:**
   ```bash
   npm start
   ```
## Usage 
**Fetch and Save Articles**
The application automatically fetches and saves articles every hour. You can also manually trigger the fetch and save process by accessing the following endpoint:
 ```http
GET http://localhost:3000/articles/fetch-and-save
   ```
**API Documentation**
Swagger is used for API documentation. Access the Swagger UI to view and test the API endpoints:
 ```http
http://localhost:3000/api-docs
   ```
**Use APIDog with Axios**
1 . I created an APIDog Account
2. I joined a team
3. I discovered SuperHost Blog Project
4. I read the documentation
5. I modified the server Url in order to use wordpress Rest API
6. I Integrated the configuration from APIDog into my Axios requests in the articleService.js file

## Project Structure
- controllers/: Contains the controller logic for handling API requests.
- models/: Defines the Sequelize models.
- routes/: Defines the API routes.
- services/: Contains the logic for fetching and saving articles.
- middlewares/: Custom middleware for error handling.
- config/: Configuration files for database and Swagger.
- server.js: Entry point for the application.



