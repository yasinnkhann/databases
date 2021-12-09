-- CREATE DATABASE chat;

USE chat;
CREATE TABLE user (
  id INT NOT NULL,
  username VARCHAR(20) NOT NULL,

    PRIMARY KEY (username)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  message VARCHAR(250) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES user(username)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/
