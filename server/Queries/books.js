const { databaseConnection } = require("../DataBase/Server");

const createQuery = async (statement, parameter) => {
  const connection = databaseConnection;
  try {
    const response = connection.query(statement, parameter);
    return response.values;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const saveBooks = async (values) => {
  const { book_name, book_description,book_author, isbn,Genre, published_date, created_on } = values;

  let statement =
    "INSERT INTO books (book_name, book_description,book_author, isbn,Genre, published_date, created_on) VALUES (?, ?,?, ?,?, ?,Now())";
  

    let query = `IF NOT EXISTS(Select * from books where book_name =?)
BEGIN
INSERT INTO books (book_name, book_description,book_author, isbn,Genre, published_date, created_on) 
Values (?, ?,?, ?,?, ?,Now())
END
);`
  let parameters = [book_name, book_description,book_author, isbn,Genre, published_date, created_on];
  return await createQuery(statement, parameters);
};

const saveGenre = async (values) => {
  const {Genre_name, Date_Modified} = values;
  let statement = "INSERT INTO Genre (Genre_name,Date_Modified) VALUES(?,NOW())";
  let parameters = [Genre_name,Date_Modified];
  return await createQuery(statement, parameters)
}

module.exports = {saveBooks, saveGenre}