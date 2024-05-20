import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Nav({LoggedIn, logout}) {
  
  const handleLogout = () => {
    logout();
    
  };

  if (LoggedIn === true) {
    
    return (
      <nav className='sidebar'>
          
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/videos" onClick={() => setIsOpen(false)}>Videos</Link>
          <Link to='/calculator' onClick={() => setIsOpen(false)}>Calculator</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <button onClick={handleLogout}>Logout Now</button>
          <div className='social-box'>
          <a className="socials" href='http://twitter.com'>Twitter</a>
          <a className="socials" href='http://linkedIn.com'>LinkedIn</a>
          </div>
          <footer>&copy; Joel Gilger</footer>
      </nav>
    );
  } else {
    return (
      <nav className='sidebar'>
          
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <div className='social-box'>
          <a className="socials" href='http://twitter.com'>Twitter</a>
          <a className="socials" href='http://linkedIn.com'>LinkedIn</a>
          </div>
          <footer>&copy; Joel Gilger</footer>
      </nav>
    );
  }
  
  
}

export default Nav;