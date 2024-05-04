import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  
  
  return (
    <nav className='NavBar'>
        
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/videos" onClick={() => setIsOpen(false)}>Videos</Link>
        <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
        <footer>&copy; Joel Gilger</footer>
    </nav>
  );
}

export default Nav;