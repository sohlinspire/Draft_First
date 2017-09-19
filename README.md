## Draft_First

This site will make writing easier by taking you through the writing process. The practice begins with help generating an idea. Next, a graphic organizer will be used to develop your idea. These sentence pieces will then be used to start writing your story. Lastly, once your story has some form, there are strategies to help add details to your writing.

## Built With

- Javascript
- HTML5
- CSS3
- AngularJS
- PostgreSQL
- express.js
- node.js
- Bootstrap
- SweetAlerts 2

## Images

![alt text](/server/public/vendors/images/login.png) ![alt text](/server/public/vendors/images/intro.png)
![alt text](/server/public/vendors/images/writings.png) ![alt text](/server/public/vendors/images/organizer.png)

## Getting Started

The following steps will get you a copy of the project up and running on your local machine for development and testing purposes.

## Step 1: Terminal

```git
npm install
```
- angular
- body-parser
- bootstrap
- express
- passport
- path
- pg
- sweetalert2

## Step 2: Postico

```SQL
CREATE DATABASE "mobility_4_all";

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

CREATE TABLE "user_writing" (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "users",
  writing VARCHAR (100000)
);

CREATE TABLE "random_topic" (
id SERIAL PRIMARY KEY,
topic VARCHAR (100000)
);
```

## Scope Documentation

https://docs.google.com/document/d/1ehLONJMm7I3KzVSO14k5drDuOym85J-id2RGZ5BLshI/edit#

## Completed Features

High level list of items completed.

- [x] Setup sql tables (user and writing) and columns, and create and insert dummy data.
- [x] Create start.html: “list of writings” table and “new writing” button
- [x] Setup GET: start.js and server communication
- [x] Connect start.js to database and GET dummy data on the DOM
- [x] Create ideas.html and connect to “new writing” button
- [x] Create organizer.html and connect to “begin writing” buttons
- [x] Create writing.html and connect to start writing button
- [x] Connect “save” button to start.html
- [x] Data binding for inputs on idea.html, organizers.html
- [x] Service for controllers idea.html, organizers.html
- [x] Data binding from organizers to writing
- [x] Set up POST: writing.js and server communicationls
- [x] Connect writing.js to start.js and POST real data on the DOM
- [x] Set up PUT: start.html/database to writing.html
- [x] Set up DELETE on start.html
- [x] Bootstrap to format
- If things go well, start stretch goals here, til the end
- [x] Random prompt generator on the ideas page.
- [x] The ability to take a sentence from their writing and insert it into the Stretch Strategy to improve the details in their writing.
- [x] Idea helper dropdown on the ideas page.
- [x] Deploy to Heroku

## Next Steps:

- [] Ability to export story to google docs
- [] Store ideas in dropdown on Ideas page
- [] Add more Strategy options to improve writing

## Authors

*David Krueger
