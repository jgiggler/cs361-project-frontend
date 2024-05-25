import React, {useEffect, useState} from 'react';

const StocksPage = ({LoggedIn}) => {
  const [stockData, setStockData] = useState([])
  const [stock, setStock] = useState()
  
  // Used to set form data to current Date
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    symbol: '',
    time_start: getCurrentDate(),
    time_end: getCurrentDate()
  });

  // Update form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Update form date
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Account for weekends where stock data doesn't change
  const getNextValidDate = (baseDate, increment) => {
    let date = new Date(baseDate);
    let daysToAdd = increment;
  
    while (daysToAdd > 0) {
      date.setDate(date.getDate() + 1); // Increment the date by one day
  
      // Check if the current date is a weekend (Saturday or Sunday)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        // If it's not a weekend, decrement the days left to add
        daysToAdd--;
      }
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    try{

      const response = await fetch('http://127.0.0.1:5151/stock/<symbol>', {method: 'POST',
                                                  headers: {'Content-Type': 'application/json'},
                                                  body: JSON.stringify(formData),});
    const data = await response.json();
    if (response.status ===200){
      console.log(data);
      setStockData(data.results);
      setStock(data.ticker);
      
    }
    } catch (error) 
      {console.error('Ticker search failed:', error);
    }
  };

  if (LoggedIn === true){
    return (
      <div>
        <h2>Stocks</h2>
        <p>Welcome to the stocks page!</p>
        <span>Here you can type in any </span>
            <a target='_blank' href='https://corporatefinanceinstitute.com/resources/wealth-management/what-is-ticker/#:~:text=a%20listed%20stock-,What%20is%20a%20Ticker%3F,specific%20stock%2C%20particularly%20during%20trading.'>
            ticker symbol</a>
             <span> for a stock and get real data about that stock. (Example: AAPL, GOOG)</span>
        <form  className='stock_form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="symbol">Ticker Symbol:</label>
          <input 
            type="text" 
            id="symbol" 
            name="symbol" 
            required
            value={formData.symbol} 
            onChange={handleChange} 
          /> 
          <label> From: </label>
          <input 
            type='date'
            id='time_start'
            name='time_start'
            required
            value={formData.time_start} 
            onChange={handleDateChange} />
            <label> To: </label>
          <input 
            type='date'
            id='time_end'
            name='time_end'
            required
            value={formData.time_end} 
            onChange={handleDateChange} />
        </div>
        
        <div className='login-stack'>
        <button className='login-stack' type="submit">Search</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Ticker</th>
              <th>Close Price</th>
              <th>Open Price</th>
              <th>High Price</th>
              <th>Low Price</th>
              <th>Volume Traded</th>
              <th>Number of Transactions</th>
            </tr>
          </thead>
          <tbody>
          {/*If there is stock data show it*/}
          {stockData ? (
            stockData.map((item, index) => (
              <tr key={index}>
                <td>{getNextValidDate(formData.time_start, index+1)} </td>
                <td>{stock} </td>
                <td>{item['c']} </td>
                <td>{item['o']} </td>
                <td>{item['h']} </td>
                <td>{item['l']} </td>
                <td>{item['v']} </td>
                <td>{item['n']} </td>
              </tr>
            ))
          ) : (
            <p>No data available</p>
          )}
          </tbody>
        </table>
        
        </div>
      </form>
      </div>
    );
  } 
};

export default StocksPage;