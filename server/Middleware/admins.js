const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const { verify } = require('jsonwebtoken')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../Middleware/.env') })


const authenticateToken = (req, res, next) => {
 
    const accessToken = req.cookies.token
    if (!accessToken) return res.json({ error: "User not logged in!" });
  
    try {
      const validToken = verify(accessToken, process.env.SECRETKEY);
      console.log('validToken', validToken)
      req.user = validToken;
      if (validToken) {
        console.log('validToken', validToken)
        return next();
      }
    } catch (err) {
      return res.json({ error: err });
    }
  

};


const adminPassword = async (password) => {
    try {
      let hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    } catch (error) {
      return error;
    }
  };

  const confirmAdminPassword = async (password,hashedPassword) => {
    try {
      let matchPassword = await bcrypt.compare(password,hashedPassword);
      console.log('matchPassword', matchPassword)
      return matchPassword;
      
    } catch (error) {
      return error
    }
  };
  
  
  module.exports = {authenticateToken, adminPassword, confirmAdminPassword };

// module.exports = authenticateToken;