import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <p>To learn things about make Login or Sign Up right now!</p>
      <button onClick={login}>Login</button><button onClick={signup}>Sign Up</button>
        </>
    )
}

export default HomePage;