import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../Styling/Register.css'

function UserRegister() {

    const [values,setValues] = useState({
        "email":"",
        "name":"",
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
        if(res?.status === 200){
            // setUsers(res.data.data)
            console.log("successful")
          navigate("/home")
        } else if(res.statusText !== "OK"){
          alert("Account already Exists, Please Log In")
          return navigate('/adminuser/adminlogin')
      } else{
          console.log(res.data.err)
      }

      
      })
        } catch (error) {
            console.log('error', error)
        }
      
    }

  return (
    <div className='register-container'>

        <div className='Form'>
      <div className='register-heading'>
        <h1>Register</h1>
        </div>
          <div className="form-container">
            <div className='form-card1'>
        <input type='email' className='inpt' placeholder='email' name='email' onChange={handleChange} value={values.email}/> <br/> 
        </div>
        <div className='form-card1'>
        <input type='text' className='inpt' placeholder='name' name='name' onChange={handleChange} value={values.name}/> <br/>
        </div>
        <div className='form-card2'>
        <input type='text' className='inpt' placeholder='username' name='username' onChange={handleChange} value={values.username}/> <br/>
        </div>
        <div className="form-card2">
        <input type='text' className='inpt' placeholder='lastname' name='lastname' onChange={handleChange} value={values.lastname}/> <br/>
        </div>
        <div className='form-card3'>
        <input type='password' className='inpt' placeholder='password' name='password' onChange={handleChange} value={values.password}/> <br/>
        </div>
        <div className='form-card3'>
        <input type='password' className='inpt' placeholder='confirm Password' name='confirmPassword' onChange={handleChange} value={values.confirmPassword}/> <br/>
        </div>
        </div>
        <button type='submit' className='button' onClick={register}>Register</button>
        </div>
    </div>
  )
}

export default UserRegister