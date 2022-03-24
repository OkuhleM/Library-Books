CREATE TABLE studentsAccounts (
	id serial PRIMARY KEY,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	username VARCHAR ( 255 ) UNIQUE NOT NULL,
	lastname VARCHAR ( 255 ) NOT NULL,
	ID INT UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE books (
	id serial PRIMARY KEY,
	book_name VARCHAR ( 255 ) UNIQUE NOT NULL,
	book_description VARCHAR ( 50 ) NOT NULL,
	book_author VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE adminAccounts (
	id serial PRIMARY KEY,
	book_name VARCHAR ( 255 ) UNIQUE NOT NULL,
	book_description VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE booksLookUp (
	id serial PRIMARY KEY,
	book_name VARCHAR ( 255 ) UNIQUE NOT NULL,
	book_description VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);