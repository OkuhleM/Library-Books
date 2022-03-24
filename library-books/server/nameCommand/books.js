const { initClient } = require("../dateBase/script");

const addNewBook = async book => {
    const client = await initClient();
    let insertQuery = "INSERT INTO books (book, descripton, author, created_on) values ($1 ,  $2, $3 ,NOW() ) RETURNING id";
    try {
        const res = await client.query(insertQuery,[book.name, book.author ,book.description]);
        await client.release();
        return res.rows[0].id; 
    }catch(e){
        console.log(e);
        await client.release();
    }
}

module.exports =  {addNewBook}
