const mysql = require("mysql")
// const mysql = require("mysql2")
// require("dotenv").config();
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

    // 'use strict';

    const databaseConnection = mysql.createConnection({
      host     : process.env.HOST,
      user     : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    });
    databaseConnection.connect(function(err) {
      if (err) {
        return err};
      console.log("Database Connected!");
    });

      // Create connection pool for the student


    const adminPool = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.ADMIN_USER,
      password: process.env.ADMIN_PASSWORD,
      database: process.env.DATABASE
  });
  
  // adminPool.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Database Connected!");
  // });
  // Create connection pool for the student
  // const studentPool = mysql.createPool({
  //     host: 'localhost',
  //     user: 'library_student',
  //     password: 'studentpassword',
  //     database: 'storebooks'
  // });
  
    module.exports = {databaseConnection,
      adminPool,
    }