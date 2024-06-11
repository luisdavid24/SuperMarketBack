# Spring Boot with GraphQL
By Luis David Lopez Mendoza

## Brief Project Description

This project responds to the challenge posed by the teacher.

## Table of Contents

- [Configuration](#configuration)
- [Usage](#usage)
- [Technology](#technology)
- [Contact](#contact)

## Configuration

1. Database Configuration:
   - Before starting, make sure you have PostgreSQL installed on your machine. You will need to change the settings in the 'application.properties' file.
   - You must create a database with the name 'SpringBootGraphQl'. The creation of the tables will be done by Spring Boot during the execution process.

2. Running the database script:

 ```sql
INSERT INTO courses (name, description,category, teacher) VALUES ('Mathematics Fundamentals','Explore the beauty of numbers and equations in this introductory mathematics course.','Mathematics', 'Juan Diego Ossa');
INSERT INTO courses (name, description,category, teacher) VALUES ('Introduction to Biology','Delve into the wonders of the natural world through experiments and observations.' ,'Science', 'Leandro Jarammillo');
INSERT INTO courses (name, description,category, teacher) VALUES ('Web Development Basics','Learn the fundamentals of coding and software development in this hands-on course.' ,'Technology', 'Neiro Figueroa');

INSERT INTO students (name, last_name, age, email, course_id) VALUES ('John', 'Serna', 26,'John@example.com', 1);
INSERT INTO students (name, last_name, age, email, course_id) VALUES ('Emily', 'Johnson', 21,'Emily@example.com', 2);
INSERT INTO students (name, last_name, age, email, course_id) VALUES ('Anyi', 'Hoyos', 22,'Anyi@example.com', 1);
INSERT INTO students (name, last_name, age, email, course_id) VALUES ('Michael', 'Williams', 24,'Michael@example.com', 3);
INSERT INTO students (name, last_name, age, email, course_id) VALUES ('Ethan', 'Miller', 18, 'Ethan@example.com',2);
INSERT INTO students (name, last_name, age, email, course_id) VALUES ('Alexander', 'Williams', 20,'Alexander@example.com', 3);
INSERT INTO students (name, last_name, age, email, course_id) VALUES ('Ava', 'Hoyos', 19, 'Ava@example.com',1);
INSERT INTO students (name, last_name, age, email, course_id) VALUES ('Michael', 'Williams', 22,'Michael@example.com', 3);

```
## Usage:
To use the project, you must first run the backend (implemented in Spring Boot) and then execute the SQL file to set up the database. Afterward, you can start the frontend using a live server.

## Technology
The technologies used in the project were:

- Spring Boot
- Bootstrap
- Chart.js
- HTML
- CSS
- GraphQl

## Contact

If you have any questions, comments, or suggestions about the project, feel free to reach out to me.

- Name: Luis David
- Email: luis_lopez82201@elpoli.edu.co
