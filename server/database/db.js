const { Pool } = require('pg');

const pool = new Pool({
    user: 'books_user',
    database: 'books',
    password: 'Lindokuhle22',
    port: 5432,
    host: 'localhost',
  })
  
module.exports = { pool };

  