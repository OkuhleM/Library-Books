------------------------------------------- create database----------------------------------------
CREATE DATABASE storebooks;
----------------------------------------------------------------------------------------------
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';
FLUSH PRIVILEGES;


UPDATE mysql.user SET authentication_string = PASSWORD('L!nd0kuhle@22')
WHERE User = 'root' AND Host = 'localhost';
FLUSH PRIVILEGES;
--------------------------------------------------------------------------------

CREATE TABLE students(
	id int AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	username VARCHAR ( 255 ) UNIQUE NOT NULL,
	lastname VARCHAR ( 255 ) NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	confirmPassword VARCHAR ( 50 ) NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

ALTER TABLE students ADD FOREIGN KEY (student_id) REFERENCES points(id);
Alter TABLE students MODIFY value LONGTEXT

ALTER TABLE students MODIFY COLUMN password LONGTEXT;


CREATE TABLE booksLookUp (
	Id int,
	idStudent int,
	idBook int,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	PRIMARY KEY (idStudent, idBook),
	FOREIGN KEY(idBook)
	REFERENCES books(id)
);
ALTER TABLE booksLookUp ADD FOREIGN KEY (idStudent) REFERENCES students(id);

ALTER TABLE books ADD FOREIGN KEY (idAdmin) REFERENCES admins(id);


ALTER TABLE booksLookUp 
ADD 
FOREIGN KEY (`idStudent`)
REFERENCES `students` (`id`);
ON DELETE SET NULL
ON UPDATE SET NULL;

CREATE TABLE tableName (
    ID INT,
    SomeEntityID INT,
    PRIMARY KEY (ID),
    FOREIGN KEY (SomeEntityID)
        REFERENCES SomeEntityTable(ID)
        ON DELETE CASCADE
);

CREATE DATABASE library_db;
USE library_db;

/*admin can only add new books*/
CREATE TABLE adminAccounts (
	id int AUTO_INCREMENT PRIMARY KEY,
	book_name VARCHAR ( 255 ) NOT NULL,
	book_description VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,

	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

ALTER TABLE admin ADD COLUMN confirmPassword LONGTEXT NOT NULL AFTER password;
ALTER TABLE books MODIFY COLUMN isb LONGTEXT NOT NULL;
ALTER TABLE books MODIFY COLUMN book_description LONGTEXT NOT NULL;
ALTER TABLE books MODIFY COLUMN isb LONGTEXT NOT NULL;
ALTER TABLE books MODIFY COLUMN isb LONGTEXT NOT NULL;
ALTER TABLE books MODIFY COLUMN isb LONGTEXT NOT NULL;

ALTER TABLE books ADD COLUMN Available bool NOT NULL AFTER Genre;


-- Create the admins table
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the books table
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    published_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 isbn ,
    published_date DATE,


ALTER TABLE books
DROP COLUMN Available bool;

	CREATE TABLE books (
		id INT AUTO_INCREMENT PRIMARY KEY,
		book_name VARCHAR ( 255 ) NOT NULL,
		book_description VARCHAR ( 50 ),
		book_author VARCHAR ( 255 ) UNIQUE NOT NULL,
		created_on TIMESTAMP NOT NULL,
		last_login TIMESTAMP 
	);

CREATE TABLE borrowed_books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    book_id INT NOT NULL,
    borrowed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    return_date TIMESTAMP NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);
-----------------------------GRANT------------------------------------------
-- Create a new MySQL user for the admin
CREATE USER 'library_admin'@'localhost' IDENTIFIED BY 'adminpassword';

-- Grant permissions on the books table to the new user
GRANT INSERT ON library_db.books TO 'library_admin'@'localhost';

-- Flush privileges to ensure they are applied
FLUSH PRIVILEGES;


-- Create a new MySQL user for students
CREATE USER 'library_student'@'localhost' IDENTIFIED BY 'studentpassword';

-- Grant SELECT and INSERT permissions on the borrowed_books table to the new user
GRANT SELECT, INSERT ON library_db.borrowed_books TO 'library_student'@'localhost';

-- Flush privileges to ensure they are applied
FLUSH PRIVILEGES;

-------------------------------------------Delete created user-----------------------------------------
DROP USER 'storebooks'@'localhost';
