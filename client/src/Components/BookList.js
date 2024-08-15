import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const BookList = () => {

const [book, setBook] = useState([])
const [books,setBooks] = useState([])

useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
    // localStorage.setItem("inputValue",inputValue)
    localStorage.setItem('book',JSON.stringify(book))
    console.log(book)
  },[book])

  const GetBooks = async () => {

     axios
      .get("http://localhost:3000/booklist")
      .then(function (response) {
        console.log('response', response)

console.log('response.data', response.data)
const List = response.data
const res = JSON.stringify(List)
console.log('List', List)
console.log('res', res)
localStorage.setItem("res",JSON.stringify(res))

setBook(res)
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

console.log('books', books)
  return (
    <div>
      <h2>Book List</h2>
   

<div className='card'>

<p>{book}</p>
</div>

      <button onClick={GetBooks}>Get Books</button>
    </div>
  );
};

export default BookList;
