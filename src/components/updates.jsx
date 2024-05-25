import React from 'react';
import { Link } from 'react-router-dom';

function Updates(){
    return <>
    <div className='updates-box'>
    <h2>Updates</h2>
    <h4>Patch 1.2</h4>
    <p className='message'> We have created a stocks page where you can find stock information based
     on a ticker symbol and it will return a table with data from the dates you selected. <Link to="/Stocks" onClick={() => setIsOpen(false)}>Try it out!</Link> </p>
    </div>
    </>
    
};


export default Updates;