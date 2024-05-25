import React, { useState, useEffect, useMemo } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FAQPage from './pages/FAQPage';
import VideosPage from './pages/VideosPage';
import StocksPage from './pages/StocksPage';
import Nav from './components/Nav';
import CalcPage from './pages/CalcPage';

function App() {
  
  
  const [LoggedIn, setLoggedIn] =  useState(localStorage.getItem('LoggedIn') === 'true');
  
  useEffect(() => {
    // Save logged-in state to localStorage
    localStorage.setItem('LoggedIn', LoggedIn);
  }, [LoggedIn]);

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    
    setLoggedIn(false);
    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
  };

  return (
    <>
      <Router>
      
      <h1>Fortune Forge</h1>
      
      <div className='sidebar'>
      {<Nav LoggedIn={LoggedIn} logout={handleLogout}/>}
      </div>
      <main>
      <section>
        
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage login={handleLogin}/>}/>
          <Route path='/signup' element={<SignUpPage/> }/>
          <Route path='/videos' element={LoggedIn ? (<VideosPage LoggedIn={LoggedIn}/> ) : (<HomePage/>)}/>
          <Route path='/faq' element={<FAQPage/>}/>
          <Route path="/Stocks" element={LoggedIn ? (<StocksPage LoggedIn={LoggedIn}/> ) : (<HomePage/>)}/> 
          <Route path='/calculator' element={LoggedIn ? (<CalcPage LoggedIn={LoggedIn}/> ) : (<HomePage/>)}/>
          </Routes>
          
      
      </section>
      </main>
      
      
      </Router>
    </>
  )
}


export default App;
