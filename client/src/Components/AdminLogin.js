import React from 'react'

export default function AdminLogin() {
  return (
    <div>
      <h2>Log In</h2>


<div className='admin-form'>
    <label>Email:</label>
    <input type='email' /> <br/>
    <label>Password:
    </label>
    <input type='password'/><br/>
    <button>Log in</button>
</div>

    </div>
  )
}
