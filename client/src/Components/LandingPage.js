import React from 'react';
import '../Styling/LandingPage.css';
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div>
<div className="header">
      <nav className="navbar">
        <div className="logo">
    <img className="logo-img" alt="website-logo" src="https://cdn.pixabay.com/photo/2019/04/07/08/35/book-4109187_1280.png" />
    </div>
        <ul>
        <Link to='adminuser'  style={{ textDecoration: 'none' }}>sign In</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='useradmin'  style={{ textDecoration: 'none' }}>sign up</Link>
        <Link to="contact" style={{ textDecoration: 'none' }}>Contact</Link>
        </ul>
      </nav>
    </div>

<div className='Intro'>
<h1> Let's Read</h1>
</div>

<div className='paragraph'>
<p>Your library has never looked so good.</p>
<p>Borrow, Read, Return</p>
</div>

    </div>
  )
}

export default LandingPage