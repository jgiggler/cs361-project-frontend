import React from 'react';
import { useNavigate } from 'react-router-dom';
import Updates from '../components/updates';
function HomePage() {
  const navigate = useNavigate()
  const login = () =>{
    navigate("/login")
  };
  const signup = () =>{
    navigate("/signup")
  };

    return (
        <>
    <h2>Homepage</h2>
      <p>
        Learn about personal finance, investing, real estate, 
        cryptocurrency and all things related to finance.
      </p>
      <p>To learn things about money Login or Sign Up right now!</p>
      <button className='login-stack' onClick={login}>Login</button>
      <button className='login-stack' onClick={signup}>Sign Up</button>
      {<Updates/>}
        </>

    )
}

export default HomePage;