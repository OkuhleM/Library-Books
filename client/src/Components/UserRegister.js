import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function UserRegister() {

    const [values,setValues] = useState({
        "email":"",
        "username":"",
        "lastname":"",
        "password":"",
        "confirmPassword":""
    })
    const [users,setUsers] = useState([])

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
      }

      const register = async (e) => {
        e.preventDefault()
        try {
            axios.post("http://localhost:3000/register", values)
      .then(res=>{
        console.log('res', res)
        if(res.data.Status === "success"){
            setUsers(res.data.data)
          navigate("/home")
        } 
      
      })
        } catch (error) {
            console.log('error', error)
        }
      
    }

  return (
    <div>
        <h1>Register</h1>
        <input type='email' placeholder='email' name='email' onChange={handleChange} value={values.email}/> <br/> 
        <input type='text' placeholder='username' name='username' onChange={handleChange} value={values.username}/> <br/>
        <input type='text' placeholder='lastname' name='lastname' onChange={handleChange} value={values.lastname}/> <br/>
        <input type='password' placeholder='password' name='password' onChange={handleChange} value={values.password}/> <br/>
        <input type='password' placeholder='confirm Password' name='confirmPassword' onChange={handleChange} value={values.confirmPassword}/> <br/>
        <button type='submit' onClick={register}>Register</button>
    </div>
  )
}

export default UserRegister