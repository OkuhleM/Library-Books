import React from 'react';
import { ImSearch } from "react-icons/im";
import './register.css'

const Register = () => {
    return (
        <div>
<div className='user'>
        <img src='https://cdn-icons-png.flaticon.com/128/5087/5087592.png' className='userIcon'></img>
       
      </div>

      <div className="navbar">
        <img src='https://i.pinimg.com/originals/0a/cd/50/0acd5002683fbcf2b720004f201ee530.jpg' height="60" className='logo' />
        <div className='links'>
          <a>My books</a> &nbsp;&nbsp;
          <a>Genre</a> &nbsp;&nbsp;
          <a> <ImSearch/> </a>
        </div>

      </div>
<div className='cardContainer'>
            <div className='form'>
                <h1>Register New Student</h1>
                <input type="text" placeholder='NAME'/><br />
                <input type="text" placeholder='USERNAME'/><br/>
                <input type="text" placeholder='SURNAME'/><br/>
                <input type="text" placeholder='ID NUMBER'/><br/>
                <input type="text" placeholder='PASSWORD CONFIRMATION'/><br/>
                <input type="text" placeholder='PHONE NUMBER'/><br/>
                <input type="text" placeholder='PASSWORD'/><br/>
                <input type="text" placeholder='PASSWORD CONFIRMATION'/><br />
                <button>SignUp</button>
            </div>
        </div>
        </div>
    )
}

export default Register