import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CalcPage() {
    const navigate = useNavigate()
    const [converted_amount, setconverted_amount] = useState(null);
    const handleSubmit = async (e) => {
        document.getElementById('convertForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
    
    
            const from = document.getElementById('from_currency').value;
            const to = document.getElementById('to_currency').value;
            const amount = document.getElementById('amount').value;
            
            fetch('http://127.0.0.1:3125/convert', { // Ensure this URL matches your Flask server URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ from_currency: from, to_currency: to, amount: amount})
            })
            .then(response => response.json())
            .then(data => {
                //backend data
                setconverted_amount(data.amount)
                console.log(data.amount)
            }
          )
            .catch(error => console.error('Error:', error));
        });
    }


    return (
        <>
        <form method='POST' id="convertForm">
        <label htmlFor="from_currency" >From currency: </label>
        <input type="text" name="from_currency" id="from_currency" rows = "1" placeholder = "from currency"/>
        <label htmlFor="to_currency" >To currency: </label>
        <input type='text' name="to_currency" id='to_currency'  rows="1" placeholder='to currency'/>
        <label htmlFor="amount" >Amount: </label>
        <input type='text' name="amount" id='amount'  rows="1" placeholder='amount'/>
        

        <button onClick={handleSubmit} type='submit'>Enter</button>
        </form>

        {converted_amount !== null && converted_amount !== undefined ? (
                <p>The value is: {converted_amount}</p>
            ) : (
                <p>No value provided</p>
            )}
      
        </>

    )
}

export default CalcPage;