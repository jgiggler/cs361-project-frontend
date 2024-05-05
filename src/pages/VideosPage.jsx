import React, {useState} from 'react';

function VideosPage({LoggedIn}) {
  if (LoggedIn === true){
    return (
    
        <>
        <h2>Videos</h2>
      <p>
        Learn about personal finance, investing, real estate, 
        cryptocurrency and all things related to finance.
      </p>
      
        </>
    );
};
}

export default VideosPage;