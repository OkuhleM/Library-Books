import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Home from './Home'
import UserLogIn from './UserLogIn';
import UserRegister from './UserRegister';
import AdminRegister from './AdminRegister'
import AdminLogin from './AdminLogin'
import BookList from './BookList'
import Contact from './Contact';


function Display() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/booklist' element={<BookList/>}></Route>
        <Route path='/userlogin' element={<UserLogIn />}></Route>
        <Route path='/adminregister' element={<AdminRegister/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/userregister' element={<UserRegister />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default Display;