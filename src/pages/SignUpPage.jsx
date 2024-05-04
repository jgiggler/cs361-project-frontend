import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [isCorrect, setisCorrect] = useState(undefined)
  const navigateTo = useNavigate();
  
  const login = () =>{
    navigateTo("/login")
  };
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    try{
      const response = await fetch('http://127.0.0.1:5000/signup', {method: 'POST',
                                                  headers: {'Content-Type': 'application/json'},
                                                  body: JSON.stringify(formData),});
    
    const data = await response.json();
    console.log(data.message)
    setIsLoggedIn(true);
    if (response.status ===200)
      {setisCorrect(true)
        navigateTo('/dashboard')}
      
    else {
      setisCorrect(false)
      navigateTo('/login')
    }
    } catch (error) 
      {console.error('Login failed:', error);
    }
    
    
  };



    return (
        <>
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Signup</button>
        <button onClick={login}>Already have an account?</button>
      </form>
      
    </div>
      
        </>
    )
}

export default SignUpPage;