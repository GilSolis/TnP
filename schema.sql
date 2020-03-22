CREATE DATABASE TnP;
USE TnP;

CREATE TABLE `prayers` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `Name` VARCHAR(30) NOT NULL,
  `Location` VARCHAR(30) NOT NULL,
  `Thoughts` VARCHAR(1000) NOT NULL,
   PRIMARY KEY ( `id` ) 
);

INSERT INTO prayers (Name, Location, Thoughts)
VALUES ("Karen", "Georgia" "Jesus is King");

INSERT INTO prayers (Name, Location, Thoughts)
VALUES ("Mike", "Delaware" "Thoughts and Prayers to all");

INSERT INTO prayers (Name, Location, Thoughts)
VALUES ("Lisa", "Washington", "Sending Love");
