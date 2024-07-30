var bcrypt = require('bcrypt');

const userPassword = async (password) => {
    try {
      let hashedPassword = await bcrypt.hash(password, 10);
      console.log('hashedPassword', hashedPassword)
      return hashedPassword;
    } catch (error) {
      return error;
    }
  };

  const confirmUserPassword = async (password,hashedPassword) => {
    try {
      let matchPassword = await bcrypt.compare(password,hashedPassword);
      console.log('matchPassword', matchPassword)
      return matchPassword;
      
    } catch (error) {
      return error
    }
  };
  
  
  module.exports = { userPassword, confirmUserPassword };