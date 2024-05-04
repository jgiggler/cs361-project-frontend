import React, { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FAQPage from './pages/FAQPage';
import VideosPage from './pages/VideosPage';
import DashboardPage from './pages/DashboardPage';
import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Router>
      <div>
        <h1>Money Knowledge</h1>
      </div>
      <div className='sidebar'>
      {isOpen && <Nav isOpen={isOpen}/>}
      </div>
      <main>
      <section>
        
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/videos' element={<VideosPage/>}/>
          <Route path='/faq' element={<FAQPage/>}/>
          <Route path="/dashboard" component={DashboardPage} element={<DashboardPage/>}/>

          </Routes>
          
      
      </section>
      </main>
      
      
      </Router>
    </>
  )
}


export default App;
