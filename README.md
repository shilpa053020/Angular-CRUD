###Angular CRUD Project

##This project is a simple CRUD (Create, Read, Update, Delete) application built using Angular. It allows users to manage student records by adding, editing, and deleting students.

##Features

Add new students

Update student details

Delete students

Display student records in a table

Integrated with a backend API using MongoDB, Node.js, and Express

Technologies Used

Frontend:

Angular

TypeScript

Bootstrap (for styling)

Backend:

Node.js

Express.js

MongoDB (Database)

Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js

Angular CLI

MongoDB

Clone the repository

git clone https://github.com/shilpa053020/Angular-CRUD-.git
cd Angular-CRUD-

Backend Setup

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Start the backend server:

npm start

The server will run on http://localhost:5000.

Frontend Setup

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the Angular application:

ng serve

The application will be available at http://localhost:4200.

API Endpoints

Students

GET /students - Fetch all students

POST /students - Add a new student

PUT /students/:id - Update student details

DELETE /students/:id - Delete a student
