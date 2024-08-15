import React from 'react'

function AdminRegister() {
  return (
    <div>
<h2>Register</h2>

<div>
    <label>UserName:</label>
    <input type='name'/><br/>
    <label>Password:</label>
    <input type='password'/><br/>
    <label>Confirm Password:</label>
    <input type='password'/><br/>
    <label>Email:</label>
    <input type='email'/><br/>
    <button>Register</button>

</div>
    </div>
  )
}

export default AdminRegister