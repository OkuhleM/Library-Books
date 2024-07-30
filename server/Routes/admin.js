const {adminPool }= require('../DataBase/Server')
const { adminPassword } = require("../Middleware/admins")
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {saveAdmin} = require('../Queries/adminQuery')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../Middleware/.env') })
// require("dotenv").config()

const LibraryAdmin = (app) => {


    /* Create Admin User */
app.post('/register-admin', async (req,res)=>{

    try {

        const { id,username, password, confirmPassword,email,created_at } = req.body;


 const userExistQuery = `
 SELECT * FROM admins
 WHERE email = ? OR username = ?`;

const userAlreadyExists =  adminPool.query(userExistQuery, [
 email,
 username,
]);

if (userAlreadyExists.length > 0) {
 const existingEmail = userAlreadyExists.find(
   (user) => user.email === email
 );

 const existingUsername = userAlreadyExists.find(
   (user) => user.username === username
 );

 if (existingEmail) {
   return res.status(400).send("Email already exists");
 }
 if (existingUsername) {
   return res.status(400).send("Ooooops Username has been taken");
 }
}
        const hashedPassword = await adminPassword(password);

        const newAdmin = {
            id,
            username,
            password:hashedPassword ,
            confirmPassword:hashedPassword,
            created_at,
            email,
          };
          const token = jwt.sign({ payload: email }, process.env.SECRETKEY, {
            expiresIn: "2h",
          }); 
        const data = await saveAdmin(newAdmin);
        console.log('data', data,token)

        res.status(200).send(data);


    } catch (error) {
        res.status(500).send({ message: 'Error registering admin', error });

    }
})

app.post("/admin-login", (req,res)=>{
    const {email,password}=req.body
    const sql = 'SELECT * FROM admins WHERE email=?';
    adminPool.query(sql,[email],(err,data)=>{
      if(err) return res.json({Error: " Login failed"})
      if(data.length > 0){
       bcrypt.compare(password.toString(), data[0].password, (err, response)=>{
        if(err) {
            console.log('err', err)
            return res.status(400).json({Error: " Password error"})
        }
        if(response) {
           console.log(response) 
          const email = data[0].email;
          console.log('email', email)

          const token = jwt.sign({email}, process.env.SECRETKEY, {expiresIn:"2h"})
          console.log('token', token)
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

}

module.exports ={LibraryAdmin}