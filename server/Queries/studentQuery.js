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

const saveUser = async (values) => {
  const {
    email,
    name,
    username,
    lastname,
    password,
    confirmPassword,
    created_on,
    last_login,
  } = values;

  let statement =
    "INSERT INTO students (email, username, name, lastname, password, confirmPassword,created_on,last_login) VALUES (?, ?, ?, ?, ?, ?,Now(), Now())";

  let parameters = [
    email,
    name,
    username,
    lastname,
    password,
    confirmPassword,
    created_on,
    last_login,
  ];
  return await createQuery(statement, parameters);
};

const checkUserName = async (username) => {
  let statement = "SELECT COUNT(*) AS count FROM students WHERE username = ?";
  let parameter = [username];
  let response = await createQuery(statement, parameter)
  return response;
};

const checkEmail = async (email) => {
  let statement = "SELECT COUNT(*) AS count FROM students WHERE email = ?";
  let parameters = [email];
  return await createQuery(statement, parameters);
};

const checkPassword = async (password) => {
  let statement = "SELECT * FROM students WHERE password =?;";
  let parameters = [password];
  console.log("password", password);
  return await createQuery(statement, parameters);
};

const checkIfPassword = async (confirmPassword) => {
  let statement = "SELECT * FROM students WHERE confirmPassword =?;";
  let parameters = [confirmPassword];
  console.log("password", confirmPassword);
  return await createQuery(statement, parameters);
};

module.exports = {
  saveUser,
  checkEmail,
  checkIfPassword,
  checkPassword,
  checkUserName,
};
