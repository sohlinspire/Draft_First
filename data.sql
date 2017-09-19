CREATE DATABASE "solo-project";

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
