import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styling/UserLogIn.css'

const UserLogIn = () => {
    const [values,setValues]= useState({
        username:"",
        password: ""
      })
      
      const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
      }

      const navigate = useNavigate()
      // axios.defaults.withCredentials = true;


const handleLogIn = e => {
  e.preventDefault()
  axios.post("http://localhost:3000/student-login", values)
  .then(res => {
    console.log('res', res)
    if(res.data.Status === "Success"){
      navigate('/home')
    }else if(res.data.Status !== "Success"){
  return "Not account Available for please register",navigate('/userregister')
    }else {
      return console.log(res.data.err)

    }
  })
  .then(err => {
console.log('err', err)
  })
}

  return (
    <div className='app'>
    <div className='container'>
        <div>
        <h1 className='Heading'>Log In</h1>
        <div className='login-form'>
           <input type='text' placeholder='username' className='icon' name='username' onChange={handleChange} value={values.username}/> <br/>
           <input type='password' placeholder='password' name='password' onChange={handleChange} value={values.password}/> <br/>
           <button onClick={handleLogIn}>Login</button>
           </div>
     </div>

    </div>
    </div>
  )
}

export default UserLogIn