import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Taken from '../components/signup-taken-message';
import TandC from '../components/Terms&Conditions';
function SignUpPage() {
  const [isCorrect, setisCorrect] = useState(undefined)
  const navigateTo = useNavigate();
  const [isOpen, setisOpen] = useState(false);

  const login = () =>{
    navigateTo("/login")
  };
  
  const handleTandCOpen = () => {
    if (isOpen === false){
      setisOpen(true);
    } else {
      setisOpen(false);
    }
  };
 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    const confirmed = window.confirm("Are you sure you want to make an account?\n Be sure to check our Terms & Conditions")
    if (confirmed) {
    console.log('Form submitted with:', formData);
    } else {
      console.log('Form submission cancelled.');
    }
    try{
      const response = await fetch('http://127.0.0.1:5000/signup', {method: 'POST',
                                                  headers: {'Content-Type': 'application/json'},
                                                  body: JSON.stringify(formData),});
    
    const data = await response.json();
    console.log(data.message)
    
    if (data.message === "Username already in use"){
      setisCorrect(false)
      navigateTo('/signup')
    }
    else {
      setisCorrect(true)
      navigateTo('/dashboard')
    }
    } catch (error) 
      {console.error('Login failed:', error);
    }
    
    
  };



    return (
        <>
    <div>
      <h2>Create an Account</h2>
      <p>Provide a username, email and password then click sign up to create an account.</p>
      <p className='taken'>
      {isCorrect !== undefined && <Taken isCorrect={isCorrect}/>}
      </p>
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
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
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
        <div className='signup-stack'>
        <button className='signup' type="submit" >Signup</button>
        <button className='signup' type='button' onClick={handleTandCOpen}>Terms & conditions</button>
        <button className='signup' type='button' onClick={login}>Already have an account?</button>
        
        </div>
      </form>
      

    </div>
    
    <TandC isOpen={isOpen}/>
    
        </>
    )
}

export default SignUpPage;