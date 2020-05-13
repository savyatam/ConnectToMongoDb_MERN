import React from 'react';
import {Link} from 'react-router-dom'
const Navbar=()=>{
  return (
    <nav>
      <div >
        <Link to="/">InstaModel</Link>
        <ul id="nav-mobile">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
