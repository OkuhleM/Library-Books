var { databaseConnection } = require("../DataBase/Server");
const {
  saveUser,
  checkEmail,
  checkUserName,
} = require("../Queries/studentQuery");
// const {bcrypt} = require("bcryptjs")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { userPassword } = require("../Middleware/index");
const studentRoute = (app) => {
  /* create user */
  app.post("/register", async (req, res) => {
    try {
      const {
        id,
        email,
        name,
        username,
        lastname,
        password,
        confirmPassword,
        created_on,
        last_login,
      } = req.body;

      // verifying the input
      if (
        !email ||
        !name ||
        !username ||
        !lastname ||
        !password ||
        !confirmPassword
      ) {
        return res.status(400).send("All Fields are required!!");
      }

      const sql = "SELECT COUNT(*) AS count FROM students WHERE email = ?";

    let uniqueUser = await checkUserName(username)
    let uniqueEmail = await  checkEmail(email)
    const count = username[0].count;
console.log('count', count)

    console.log('uniqueUser, uniqueEmail', uniqueUser, uniqueEmail)

// if (uniqueUser.length > 0){
// console.log('uniqueUser.length > 0', uniqueUser[0].length > 0)
// res.status(400).send("User Name already exists")
// } else if(uniqueEmail.length > 0){
//   console.log('uniqueEmail.length > 0', uniqueEmail[0].length > 0)
//   res.status(400).send("Email already exists")
// }
// else if(uniqueUser.length > 0 && uniqueEmail.length > 0){
//   console.log(uniqueUser.length > 0 && uniqueEmail.length > 0)
//   res.status(400).send("account already exists, please log in")
// }

      const passwordThatHasBeenEncrypted = await userPassword(password);

      const newStudents = {
        id,
        email,
        name,
        username,
        lastname,
        password: passwordThatHasBeenEncrypted,
        confirmPassword: passwordThatHasBeenEncrypted,
        created_on,
        last_login,
      };

      const data = await saveUser(newStudents);
      console.log("data", data);
       res.status(200).send(data);
    } catch (error) {
      console.log("error", error);
       res.status(401).send(error.message);
    }
  });

  app.post("/student-login", (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM students WHERE username=?";
    databaseConnection.query(sql, [username], (err, data) => {
      console.log("data", data);
      if (err) {
        console.log("err", err);
        return res.json({ Error: " Login failed" });
      }
      if (data.length > 0) {
        bcrypt.compare(
          password.toString(),
          data[0].password,
          (err, response) => {
            if (err) {
              console.log("err", err);
              return res.status(400).json({ Error: "Password error" });
            }
            if (response) {
              console.log("response", response);
              const username = data[0].username;
              console.log("username", username);
              const token = jwt.sign({ username }, process.env.SECRETKEY, {
                expiresIn: "2h",
              });
              res.cookie("token", token);
              return res.json({ Status: "Success" });
            } else {
              return res.json({ Error: "Password does not match" });
            }
          }
        );
      } else {
        return res.json({ error: "Account Does not exist exists" });
      }
    });
  });

  app.get("/get-books", (req, res) => {});
};
module.exports = { studentRoute };
