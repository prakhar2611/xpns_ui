import React, { useState } from 'react';

export function FetchRaw (){
    const [fromDate, setFromDate] = useState(new Date().toISOString().substr(0, 10)); // Set default value to today's date
    const [toDate, setToDate] = useState(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)); // Set default value to 7 days ago
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const from = formData.get('from');
      const to = formData.get('to');
  
      // Call API with form data
      fetch(`https://example.com/api?from=${from}&to=${to}`)// intgrate our sync up api 
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    };

    return (
        <div>
        <h1>Fetch your Mails </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="from">From:</label>
          <input type="date" id="from" name="from" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
    
          <label htmlFor="to">To:</label>
          <input type="date" id="to" name="to" value={toDate} onChange={(e) => setToDate(e.target.value)} />
    
          <button type="submit">Submit</button>
        </form>
        </div>
      );
}