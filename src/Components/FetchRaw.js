import React, { useState } from 'react';
import { 
    Button,
    DatePicker,
    Form,
    Select,
   } from 'antd'
import axios from 'axios'


    

    export function FetchRaw (){
    const { RangePicker } = DatePicker;
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const [label,setlabel] = useState (null);

    // const [toDate, setToDate]= useState(new Date());//toLocaleDateString('en-CA', options)); // Set default value to today's date
    // const [fromDate, setFromDate]  = useState(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)); // Set default value to 7 days ago
  
    //fucntion for disbaling other dates
    const disabledDate = (current) => {
      if (!dates) {
        return false;
      }
      const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
      const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
      return !!tooEarly || !!tooLate;
    };

    //fucntion on opening of date range
    function onOpenChange(open) {
      if (open) {
        setDates([null, null]);
      } else {
        setDates(null);
      }
    };
    
    //function tohandle the fetch button
    function handleSubmit(event){
      event.preventDefault();

      //console.log(dates)
      console.log(new Date(value[0]).toLocaleDateString('en-CA', options))
      console.log(new Date(value[1]).toLocaleDateString('en-CA', options))

    const from = new Date(value[0]).toLocaleDateString('en-CA', options);
    const to = new Date(value[1]).toLocaleDateString('en-CA', options)

  
       var token = sessionStorage.getItem('access_token');
      axios.get(`http://localhost:9005/expense/api/v1/getExpense?from=${from}&to=${to}&label=${label}`,{
        headers: {           
            'Content-Type': 'application/json',
            'token' :  token
         },        
    })
    .then(response => {
        console.log(response.data);})
        .catch(error => console.error(error));
    };

    //returning div 
    return (
    <div>
    <Form >
            <Form.Item label="Account">
            <Select  onChange = {(value) => setlabel(value)}>
            <Select.Option value="HDFC">HDFC</Select.Option>
            <Select.Option value="SBI">SBI</Select.Option>
            </Select>
        </Form.Item>
        
        <Form.Item label="From">
        <RangePicker
        value={dates || value}
        disabledDate={disabledDate}
        onCalendarChange={(val) => setDates(val)}
        onChange={(val) => setValue(val)}
        onOpenChange={onOpenChange}
        />
        </Form.Item>
        
        <Form.Item >
            <Button onClick={handleSubmit}>Fetch</Button>
        </Form.Item>
    </Form>


    
    </div>
      );
}