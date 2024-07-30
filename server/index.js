const express = require("express");
const app = express();
const session = require('express-session');
var cookieParser = require('cookie-parser')
var request = require('request');


const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require('body-parser');
const { studentRoute} = require("./Routes/students");
// const AdminRoutes = require("./Routes/admin");
const {LibraryAdmin} = require('./Routes/admin');
const { AddBooks } = require("./Routes/books");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(cors(
	{
	  origin:["http://localhost:3000"],
	  methods: ["POST","GET"],
	  credentials: true,    
    optionSuccessStatus:200

	}
  ));

 
  
  app.use(cookieParser())

app.use(express.json());
app.use(bodyParser.json())
// app.use(cors());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     'http://localhost:3000/add-book',
    body:    "j_email=myemail&j_password=mypassword"
}, function(err, res, body){
    console.log(body);
})


studentRoute(app)
LibraryAdmin(app)
AddBooks(app)

app.get('/', function (req, res) {
  res.send('Library'); // This will serve your request to '/'.
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});


module.exports = app