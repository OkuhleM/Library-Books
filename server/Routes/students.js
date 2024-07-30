var {databaseConnection} = require('../DataBase/Server');
const {saveUser} = require('../Queries/studentQuery')
// const {bcrypt} = require("bcryptjs")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const {userPassword} = require("../Middleware/index")
const studentRoute = (app) => {
  
/* create user */
app.post('/register',async(req,res)=>{
  try {
    const { id,email, username, lastname, password, confirmPassword,created_on,last_login } = req.body;

// verifying the input
    if (!email || !username || !lastname || !password || !confirmPassword) {
      return res.status(400).send("All Fields are required!!");
    }

    const userExistQuery = `
    SELECT * FROM students
    WHERE email = ? OR username = ?`;

  const userAlreadyExists =  databaseConnection.query(userExistQuery, [
    email,
    username,
  ]);
  console.log('userAlreadyExists', userAlreadyExists.sql)

  if (userAlreadyExists.length > 0) {
    const existingEmail = userAlreadyExists.find(
      (user) => user.email === email
    );

    const existingUsername = userAlreadyExists.find(
      (user) => user.username === username
    );

     if (existingEmail) {
      console.log('existingEmail', existingEmail)
      return res.status(400).send("Email already exists");
    }
    if (existingUsername) {
      console.log('existinUsername', existingUsername)
      return res.status(400).send("Oooooops Username has been taken");
    }
  }

  const passwordThatHasBeenEncrypted = await userPassword(password);

      const newStudents = {
        id,
        email,
        username,
        lastname,
        password:passwordThatHasBeenEncrypted ,
        confirmPassword:passwordThatHasBeenEncrypted,
        created_on,
        last_login
      };

      const data = await saveUser(newStudents);
console.log('data', data)
      return res.status(200).send(data);



  } catch (error) {
    console.log('error', error)
      return res.status(401).send( error.message );

  }
})

app.post("/student-login", (req,res)=>{
  const {username,password}=req.body
  const sql = 'SELECT * FROM students WHERE username=?';
  databaseConnection.query(sql,[username],(err,data)=>{
    console.log('data', data)
    if(err) {
      console.log('err', err)
      return res.json({Error: " Login failed"})
    }
    if(data.length > 0){

     bcrypt.compare(password.toString(), data[0].password, (err, response)=>{

      if(err) {
        console.log('err', err)
        return res.status(400).json({Error: "Password error"})
      }
      if(response) {
        console.log('response', response)
        const username = data[0].username;
        console.log('username', username)
        const token = jwt.sign({username}, process.env.SECRETKEY, {expiresIn:"2h"})
        res.cookie("token", token)
        return res.json({Status: "Success"})
      }else{
        return res.json({Error: "Password does not match"})
      }

     })
    }else{
      return  res.json({error:"Account Does not exist exists"})
    }
  })
})

app.get('/get-books',(req,res)=>{
  
})


}
module.exports = {studentRoute}