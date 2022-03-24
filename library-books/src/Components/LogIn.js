import React from 'react';
import './App.css';
import { ImSearch } from "react-icons/im";
import { Link} from 'react-router-dom';

const LogIn=()=> {
  return (
    <div className='container'>
      <div className='user'>
        <img src='https://cdn-icons-png.flaticon.com/128/5087/5087592.png' className='userIcon'></img>
      </div>

      <div className="navbar">
        <img src='https://i.pinimg.com/originals/0a/cd/50/0acd5002683fbcf2b720004f201ee530.jpg' height="60" className='logo' />
        <div className='links'>
          <a>My books</a> &nbsp;&nbsp;
          <a> <ImSearch/> </a>
        </div>

      </div>
     <img src='https://cdn.dribbble.com/users/2095589/screenshots/4166422/media/4f5df9f81aa355998185eefc94fc4456.png?compress=1&resize=400x300&vertical=top' 
     height="115" className="userDetails"/>
     <fieldset>
       <legend>LOGIN</legend>
        <form>
          <input type="email" placeholder='Email/username'/><br />
          <input type="password" placeholder='password'/><br />
          <p className='remember'>Remeber me</p>
          <p className='pw'>Forgot password</p>
          <button type="button">LogIn</button>
        </form>
        </fieldset>
       <Link to='/register'> <p className='fieldset'>Create an account</p></Link>
    </div>
  )
}

export default LogIn