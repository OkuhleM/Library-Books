import React from 'react'
import { Link } from 'react-router-dom'


function AdminUser() {
  return (
    <div>
        
<div>

<p>Welcome to your digital Library</p>
<p>Admin or User?</p>

</div>

<div>
    <p>Admin Log In</p>
    <Link to="adminlogin">Log In</Link>

    <p> User Log In</p>
    <Link to="userlogin">Log In</Link>
</div>

    </div>
  )
}

export default AdminUser