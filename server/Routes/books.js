const {authenticateToken} = require("../Middleware/admins");
const {saveBooks, saveGenre} = require("../Queries/books");
const { databaseConnection} = require('../DataBase/Server')


AddBooks = (app)=>{
    app.post('/add-book', authenticateToken, async (req, res) => {
 
       const { id, book_name, book_description,book_author, isbn, Genre, published_date, created_on, admin_id } = req.body;

       //--verify book---
       if (!book_name || !book_description || !book_author || !isbn || !Genre || !published_date) {
        return res.status(400).json({ message: 'Please provide all book details' });
    }

    try {
   
        const bookExist = `
        SELECT * FROM books
        WHERE isbn = ? OR book_name = ?`;

        const bookAlreadyExists =  databaseConnection.query(bookExist, [
            [isbn],
            [book_name],
          ]);
        
          if (bookAlreadyExists.length > 0) {
            const existingBook = bookAlreadyExists.findOne(
              (book) => book.book_name === book_name
            );
console.log('existingBook', existingBook.values)
            const existingBookIsbn = bookAlreadyExists.findOne(
                (book) => book.isbn === isbn
              );
              console.log('existingBookIsbn', existingBookIsbn.values)
              if (existingBook) {
            return res.status(400).json({message:"Book already exists"});
              }
              if (existingBookIsbn) {
                console.log('existingBookIsbn', existingBookIsbn)
                return res.status(400).json({message:"ISBN already Exists!!"});
              }
            }

    const newBook = {
        id,
        book_name, 
        book_description,
        book_author, isbn, Genre,
        published_date, created_on, admin_id
      };
    

    const data = await saveBooks(newBook);
    res.status(200).send(data);

} catch (error) {
    console.log('book error', error)
    res.status(500).json({ message: 'Error adding book' });

}

})

app.post('/add-genre', async (req,res)=>{
  const {GenreId,Genre_name,Date_Modified} = req.body
  if(!Genre_name){
    return res.status(400).json({Message:"Please fill all the fields"})
  }
  try{
const genre = {
  GenreId,
  Genre_name,
  Date_Modified
}

const data = await saveGenre(genre);
console.log('data', data)
res.status(200).send(data)
  } catch{
    console.log('genre error', error)
    res.status(500).json({ message: 'Error adding Genre' });
  }
})

app.delete('/delete-book/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
      databaseConnection.query('DELETE FROM books WHERE id = ?', [id], (err, results) => {
        console.log('results', results)
          if (err) {
            console.log('err', err)
              return res.status(500).json({ message: 'Error deleting book', error: err });
          }
          if (results.affectedRows === 0) {
            console.log('results2', results)
              return res.status(404).json({ message: 'Book not found' });
          }
          res.status(200).json({ message: 'Book deleted successfully' });
      });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
});

// Edit Book
app.put('/edit-book/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { book_name, book_author, isbn, published_date } = req.body;

  if (!book_name || !book_author || !isbn || !published_date) {
      return res.status(400).json({ message: 'Please provide all book details' });
  }

  try {
      db.query(
          'UPDATE books SET book_name = ?, book_author = ?, isbn = ?, published_date = ? WHERE id = ?',
          [book_name, book_author, isbn, published_date, id],
          (err, results) => {
            console.log('results', results)
              if (err) {
                  return res.status(500).json({ message: 'Error updating book', error: err });
              }
              if (results.affectedRows === 0) {
                  return res.status(404).json({ message: 'Book not found' });
              }
              res.status(200).json({ message: 'Book updated successfully' });
          }
      );
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
});

}
module.exports = {AddBooks};