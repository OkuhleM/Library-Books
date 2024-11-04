import React from 'react';
import { Link } from 'react-router-dom';

function UserAdmin() {
  return (
    <div>
        <div>

<p>Welcome to your digital Library</p>
<p>Admin or User?</p>

</div>

<div>
    <p>Admin Sign Up</p>
    <Link to="adminregister">Register</Link>

    <p> User Sign Up</p>
    <Link to="userregister">Register</Link>
</div>

    </div>
  )
}

export default UserAdmin