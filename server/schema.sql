DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text CHAR(140) NOT NULL,
  user_id INT,
  room_id INT, 
  created_at DATETIME,

  FOREIGN KEY (user_id)
    REFERENCES users(id) 
  FOREIGN KEY (room_id)
    REFERENCES rooms(id)  
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username CHAR(30)
);

CREATE TABLE rooms (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name CHAR(20)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

