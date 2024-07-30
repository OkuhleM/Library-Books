import React from 'react';
import '../Styling/LandingPage.css';
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div>
<div class="header">
    <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdRgyygHyXYi6uqZ-vr2KSDBEca6v247g6X1Di2XEC76nd7TQig7JT8z_bR85IhJadeQ&usqp=CAU" alt="My Image" />
      <nav class="navbar">
        <ul>
        <Link to='userlogin'  style={{ textDecoration: 'none' }}>sign In</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='userregister'  style={{ textDecoration: 'none' }}>sign up</Link>
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