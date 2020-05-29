import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='sandbox-navbar'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          The Sandbox
        </Link>
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;