import React,{useState} from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

export default function AdminLogin() {

const [values, setValues] = useState({
    "email":"",
    "password":""
})
const [saveValues, setSaveValues] = useState([])

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
    <div>
      <h2>Log In</h2>


<div className='admin-form'>
    <label>Email:</label>
    <input type='email' name='email' value={values.email} onChange={handleChange}/> <br/>
    <label>Password:
    </label>
    <input type='password' name='password' value={values.password} onChange={handleChange}/><br/>
    <button onClick={handleLogin}>Log in</button>
</div>

    </div>
  )
}
