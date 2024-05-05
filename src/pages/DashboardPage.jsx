import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = ({LoggedIn}) => {
  
  if (LoggedIn === true){
    return (
      <div>
        <h2>Dashboard</h2>
        <p>Welcome to your dashboard!</p>
        {/* content here */}
      </div>
    );
  } 
};

export default DashboardPage;