-- CREATE AND USE DB
CREATE DATABASE burgers_db;
USE burgers_db;

-- Remove table if it exists before starting again
DROP TABLE IF EXISTS burgers;

-- BURGERS TABLE 
CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);