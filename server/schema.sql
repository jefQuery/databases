DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username CHAR(30)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text CHAR(140) NOT NULL,
  user_id INT,
  roomname CHAR(25), 
  created_at DATETIME

);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

