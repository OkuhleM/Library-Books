import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'

function AdminRegister() {

const [adminValues, setAdminValues] = useState({
    "username":"",
    "password":"",
    "confirmPassword":"",
    "email":""
})
const [saveValues, setSaveValues] = useState([])

const handleChange = e => {
    setAdminValues({...adminValues, [e.target.name]: e.target.value})
}


const navigate = useNavigate()

const handleRegister = async e => {
    e.preventDefault();
try {
    axios.post('http://localhost:3000/register-admin', adminValues)
    .then(res => {

        // if(res.data.Status === "Success"){
        //     console.log("Success")
        //     return navigate('/admindashboard')
        // } 
console.log('res', res)
if(res?.status===200){
    console.log("Success")
    return navigate('/admindashboard')
} else if(res.data.Status !== "Success"){
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
    <div>
<h2>Register</h2>

<div>
    <label>UserName:</label>
    <input type='name' name='username' onChange={handleChange} value={adminValues.username}/><br/>
    <label>Password:</label>
    <input type='password' name='password' onChange={handleChange} value={adminValues.password}/><br/>
    <label>Confirm Password:</label>
    <input type='password' name='confirmPassword' onChange={handleChange} value={adminValues.confirmPassword}/><br/>
    <label>Email:</label>
    <input type='email' name='email' onChange={handleChange} value={adminValues.email}/><br/>
    <button onClick={handleRegister}>Register</button>

</div>
    </div>
  )
}

export default AdminRegister