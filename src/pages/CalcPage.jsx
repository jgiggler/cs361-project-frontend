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

                setconverted_amount(data.amount.toFixed(2))
                console.log(data.amount)
            }
          )
            .catch(error => console.error('Error:', error));
        });
    }


    return (
        <>
        <p>Here you can learn about currency conversion. You can take any currency and convert it to another currency and see the exchange rate.</p>
        <p>Currency options</p>
        <form method='POST' id="convertForm">
        <label htmlFor="from_currency" >From currency: </label>
        <select name="from_currency" id="from_currency">
        <option value="AUD">AUD (Australian Dollar)</option>
        <option value="CAD">CAD (Canadian Dollar)</option>
        <option value="CHF">CHF (Swiss Franc)</option>
        <option value="CNY">CNY (Chinese Yuan Renminbi)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="GBP">GBP (British Pound Sterling)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
        <option value="USD" selected="selected">USD (United States Dollar)</option>  
        </select>
        
        <label htmlFor="to_currency" > To currency: </label>
        <select name="to_currency" id="to_currency">
        <option value="AUD">AUD (Australian Dollar)</option>
        <option value="CAD">CAD (Canadian Dollar)</option>
        <option value="CHF">CHF (Swiss Franc)</option>
        <option value="CNY">CNY (Chinese Yuan Renminbi)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="GBP">GBP (British Pound Sterling)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
        <option value="USD">USD (United States Dollar)</option>
        </select>
        <p></p>
        <label htmlFor="amount" > Amount: </label>
        <input type='text' name="amount" id='amount'  rows="1" placeholder='amount'/>
        

        <button className='calc_submit' onClick={handleSubmit} type='submit'>Enter</button>
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