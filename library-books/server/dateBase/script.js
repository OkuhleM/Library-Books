var Pool = require('pg-pool');
// var { Pool } = require('pg')
// var pool = new Pool()

var booksDataBase = new Pool({
    user: "postgres",
    host: 'localhost',
    database: 'books',
    password: 'password',
    port: 5432,
})

const initClient = async () => {
   
    const getClient = await booksDataBase.connect()
    return getClient
} 

module.exports = {
    initClient
}

