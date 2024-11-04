import React from 'react'
import { Link } from 'react-router-dom';
import '../Styling/adminUser.css'


function AdminUser() {
  return (
    <div className='body'>
        
<div className='cursor intro'>

<p className='p-tag'>Welcome to your digital library! Are you logging in as Admin or User?</p>

</div>
<div className='admin-user'>
<div className='admin-logo'>
    <p className='figcap'>Admin</p><br/>
    <Link to="adminlogin">
    <img alt='admin' className="user" src='https://cdn.pixabay.com/photo/2017/01/10/23/01/shield-1970470_1280.png'/>
    </Link>
    </div>

<div className='user-logo'>
<p className='figcap'> User </p> <br/>
<Link to="userlogin">
<img alt='user' className="user" src='https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png' />
</Link>
</div>
</div>
 


    </div>
  )
}

export default AdminUser