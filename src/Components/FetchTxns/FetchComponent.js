import React, { useState,useEffect } from 'react';
import { 
    Button,
    DatePicker,
    Form,
    Select,
    Space,
    Radio
   } from 'antd'
   import moment from 'moment'
   import axios from 'axios'
import { DataGrid } from './DataGrid';

const optionsWithDisabled = [
    {
      label: 'Fetch',
      value: 'Fetch',
    },
    {
      label: 'Sync',
      value: 'Sync',
    }

  ];

export function FetchRaw (){
    const { RangePicker } = DatePicker;
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    // const [avalue,setavalue] = useState(null);
    const [label,setlabel] = useState (null);
    const [fetched,setfetched] = useState(false);
    const [value4, setValue4] = useState('Fetch');


    const [data,setdata] = useState([])

    const disabledDate = (current) => {
      if (!dates) {
        return false;
      }
      const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
      const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
      return !!tooEarly || !!tooLate;
    };



    //fuction to dset the value of the radio button on selection 
    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setValue4(value);
      };

    //fucntion on opening of date range
    function onOpenChange(open) {
      if (open) {
        setDates([null, null]);
      } else {
        setDates(null);
      }
    };

    //trying to set taody and week date on the range picker and then on fetch the data will be loaded but 
    //bypassing the date filling and going with today and week buttons and range for dynamic dates
    //was not able to complete the below as the limit for re rendering was happening - need to check 
    // function setD() {
    //     //event.preventDefault();
    //     const current = new Date();
    //     const u = moment(new Date(new Date().setDate(current.getDate())).toString());
    //     const w= moment(new Date(new Date().setDate((current.getDate() - 1))).toString());
    //     console.log(u,w)
    //     setValue([u, w]);
    //     return
    // }
    // function setW() {
    //     const current = new Date();
    //     const u = moment(new Date(new Date().setDate(current.getDate())).toString());
    //     const w= moment(new Date(new Date().setDate((current.getDate() - 7))).toString());
    //     console.log(u,w)
    //     useEffect(()=>{
    //         setValue([u, w]);
    //     }, [])
    // }
    
    //function tohandle the fetch button
    function handleSubmit(event){
        setdata(null)
        var from = new Date();
        var to = new Date();

    const current = new Date();
    if (event == "ByDate")  {
     from = new Date(value[0]).toLocaleDateString('en-CA', options);
     to = new Date(value[1]).toLocaleDateString('en-CA', options)
    }else if(event == "Today") {
         to = new Date(new Date().setDate(current.getDate())).toLocaleDateString('en-CA', options);
         from = new Date(new Date().setDate((current.getDate() - 1))).toLocaleDateString('en-CA', options);
    }else if (event == "Week") {
        to = new Date(new Date().setDate(current.getDate())).toLocaleDateString('en-CA', options);
        from = new Date(new Date().setDate((current.getDate() - 7))).toLocaleDateString('en-CA', options);
    }
  
    var token = sessionStorage.getItem('access_token');
    if (value4 == "Fetch")
    {
        console.log("Request payload for fetching the data : ", `http://localhost:9005/expense/api/v1/getExpense?from=${from}&to=${to}&label=${label}` )

            axios.get(`http://localhost:9005/expense/api/v1/getExpense?from=${from}&to=${to}&label=${label}`,{
            headers: {           
                'Content-Type': 'application/json',
                'token' :  token
            },        
        })
        .then(response => {
            console.log(response.data);
            if (response.status == 200) {
                setfetched(true)
                setdata(response.data)

            }
        })
            .catch(error => console.error(error));
            setfetched(true)
        
     } else if (value4 == "Sync") 
    {
        console.log("Request payload for fetching the data : ", `http://localhost:9005/SyncMail?label=${label}&to=${to}&from=${from}` )

        axios.get(`http://localhost:9005/SyncMail?label=${label}&to=${to}&from=${from}`,{
            headers: {           
                'Content-Type': 'application/json',
                'token' :  token
            },        
        })
        .then(response => {
            console.log(response.data);
            if (response.status == 200) {
               
                
            }
        })
            .catch(error => console.error(error));
   
        };
    }   
    

    return (
    <div className='center'>
        <h1>Fetch you transactions </h1>
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
        // disabledDate={disabledDate}
        onCalendarChange={(val) => setDates(val)}
        onChange={(val) => setValue(val)}
        onOpenChange={onOpenChange}
        />
        </Form.Item>
        
        <Form.Item >
        <Space wrap>
        <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
            <Button onClick={() =>handleSubmit("ByDate")}>ByDate</Button>
            <Button onClick={()=>handleSubmit("Today")}>Today</Button>
            <Button onClick={()=>handleSubmit("Week")}>Week</Button>
        </Space>
        </Form.Item>

    </Form>
    <DataGrid isfetched = {fetched} data = {data}/>
    {/* <newDt /> */}
    </div>
      );
}