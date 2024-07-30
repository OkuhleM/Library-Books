const {databaseConnection} = require('../DataBase/Server')

// Add Book Lookup Data (Protected Route)

const LookUpBook = app => {

router.post('/add-book-lookup', verifyToken, async (req, res) => {
    const { idStudent, idBook, date } = req.body;

    if (!idStudent || !idBook ) {
        return res.status(400).json({ message: 'Please provide all lookup details' });
    }

    try {
        databaseConnection.query(
            'INSERT INTO bookLookUp (idStudent, idBook, date) VALUES (?, ?, NOW())',
            [idStudent, idBook, date],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ message: 'Error adding book lookup data', error: err });
                }
                res.status(201).json({ message: 'Book lookup data added successfully' });
            }
        );
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
}

module.exports={LookUpBook}