const express = require("express");
const app = express();
const port = 4000;
const {addNewBook} = require("./nameCommand/books.js")
app.use(express.json())
app.post('/add-new',(req, res)=>{
    // const {name, description, author} = req.body
   const action = addNewBook(req.body) 
   if(action.length > 0)res.send(action).status(404)

})
app.listen(port, () =>{
    console.log(`app running in ${port}`)
})