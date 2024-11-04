// const { databaseConnection } = require("../DataBase/Server");

const { adminPool } = require("../DataBase/Server");

const createQuery = async (statement, parameter) => {
  const connection = adminPool;
  try {
    const response = connection.query(statement, parameter);
    return response.values;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const saveAdmin = async (values) => {
  const { username, password, confirmPassword, email, created_at } = values;

  let statement =
    "INSERT INTO admins (username, password, confirmPassword, email,created_at) VALUES (?, ?, ?, ?,Now())";

  let parameters = [username, password, confirmPassword, email, created_at];
  return await createQuery(statement, parameters);
};

const checkEmail = async (email) => {
  let statement = "SELECT email FROM admins WHERE email =?;";
  let parameters = [email];
  return await createQuery(statement, parameters);
};

const checkPassword = async (password) => {
  let statement = "SELECT * FROM admins WHERE password =?;";
  let parameters = [password];
  console.log("password", parameters, password);
  return await createQuery(statement, parameters);
};

const ifPasswordValid = async (confirmPassword) => {
  let statement = "SELECT * FROM admins WHERE confirmPassword =?;";
  let parameters = [confirmPassword];
  console.log("password", parameters, confirmPassword);
  return await createQuery(statement, parameters);
};

module.exports = { saveAdmin, ifPasswordValid, checkPassword, checkEmail };
