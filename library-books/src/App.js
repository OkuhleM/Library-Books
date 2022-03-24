// import './App.css';
import './Components/LogIn';
import './Components/Register'
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const libraryBooks = () => {
  return (

    <Router>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
     
    </Routes>
  </Router>


  
  )
}

export default libraryBooks;
