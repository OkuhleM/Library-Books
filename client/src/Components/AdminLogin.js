import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../Styling/AdminLogIn.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function AdminLogin() {

const [values, setValues] = useState({
    "email":"",
    "password":""
})

const navigate = useNavigate()


const handleChange = (e) => {
    e.preventDefault()
    setValues({...values,[e.target.name]: e.target.value})
}


const handleLogin = (e) => {
    e.preventDefault()
axios.post("http://localhost:3000/admin-login",values)
.then(res => {
    console.log('res', res)
    if(res.data.Status === "Success"){
        console.log("Success")
        return navigate('/admindashboard')
    } else if(res.data.Status !== "Success") {
        alert("Admin Not Found, please register!!")
return navigate('/useradmin/adminregister')
    } else{
        console.log(res.data.err)
    }
})
}

  return (
    
    <div className='admin-container'> 

<div>
    <img  className='welcome-pic' src='https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_1280.png' alt='logo'/ >
</div>

<div className='spectre-form'>
<div className='admin-form'>
<h2 className='heading'>Log In</h2>
<div class="input-container">
    <FontAwesomeIcon icon="coffee" />
    <input type='email' name='email' className='email' value={values.email} onChange={handleChange} placeholder="Email"/> <br/>

  </div>

    {/* <label>Email:</label> */}
    {/* <label>Password:
    </label> */}

<div class="input-container">
    {/* <i class="fa fa-user icon"></i> */}
 
    <input type='password' className='password' name='password' placeholder="Password" value={values.password} onChange={handleChange}/><br/>

    {/* <input class="input-field" type="text" placeholder="Username" name="usrnm"> */}
  </div>

    <button className='admin-btn' onClick={handleLogin}>Log in</button>
</div>
</div>


    </div>
  )
}
