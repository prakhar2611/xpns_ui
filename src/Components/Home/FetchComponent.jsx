import React, { useState,useEffect } from 'react';
import { 
    Button,
    DatePicker,
    Form,
    Select,
    Space,
    Radio, message   
   } from 'antd'
   import axios from 'axios'
import { DataGrid } from './DataGrid';
import { FetchWorker, SyncWorker} from '../../Utils/FetchSyncWorker';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';




export function FetchRaw ({screen}){
    const { RangePicker } = DatePicker;
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const [label,setlabel] = useState (null);
    const [fetched,setfetched] = useState(false);
    const [value4, setValue4] = useState('Fetch');
    const [disabled,setdisabled] = useState(true);
    const [spin,setspin] = useState(false);
    const [synced,setsynced] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();





    const [data,setdata] = useState([])

    const antIcon = (
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />)

    const disabledDate = (current) => {
      if (!dates) {
        return false;
      }
      const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
      const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
      return !!tooEarly || !!tooLate;
    };

    const onDateSelect = (val) => {
      setValue(val)
      setdisabled(false)
    }

  

    //function on opening of date range
    function onOpenChange(open) {
      if (open) {
        setDates([null, null]);
      } else {
        setDates(null);
      }
    };

    //function tohandle the fetch button
    function handleSubmit(event,screen){
        setdata(null)

        messageApi.open({
          type: 'loading',
          content: 'Action in progress..',
          duration: 0,
        });

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
    
      //calling api to get data
      if (screen == "sync") {
        SyncWorker(token,from,to,label).then((res) => {
          console.log("reposne data " , res)
          setTimeout(messageApi.destroy, 1500);
        },(err) => {
          alert(err)
        })
      }else{
        FetchWorker(token,from,to,label).then((res) => {
          setfetched(true)
          setdata(res)
          setTimeout(messageApi.destroy, 1500);
          console.log("reposne data " , res)
        },(err) => {
          alert(err)
        })
      }
}   
    

  return (
    <div >
            {contextHolder}

      <GetTitle screen={screen}/ >
      <Form  
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}>
            <Form.Item size="middle" label="Account">
            <Select  onChange = {(value) => setlabel(value)}>
            <Select.Option value="HDFC">HDFC</Select.Option>
            <Select.Option value="SBI">SBI</Select.Option>
            </Select>
            </Form.Item>
      
      <td></td>
        <Form.Item label="From">
          <RangePicker
          value={dates || value}
          // disabledDate={disabledDate}
          onCalendarChange={(val) => setDates(val)}
          onChange={(val) => onDateSelect(val)}
          onOpenChange={onOpenChange}
          />
        </Form.Item>
        
        <Form.Item >
            <Button disabled ={disabled} onClick={() =>handleSubmit("ByDate",screen)}>{screen}</Button>
            <Button  onClick={()=>handleSubmit("Today",screen)}>Today</Button>
            <Button  onClick={()=>handleSubmit("Week",screen)}>Week</Button>
        </Form.Item>
      </Form>
      <DataGrid isfetched = {fetched} data = {data}/>
      //<Spin spinning={spin} indicator={antIcon} />
  </div>
  );
}

function GetTitle({screen}){
      if(screen == "sync" ) {
        return (<h1>Sync your transactions </h1>)
      }else {
        return (<h1>Fetch your transactions </h1>)

      }
}



//extra notes 

    //trying to set today and week date on the range picker and then on fetch the data will be loaded but 
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
    
    //-----------------

    // //fuction to dset the value of the radio button on selection 
    // const onChange4 = ({ target: { value } }) => {
    //     console.log('radio4 checked', value);
    //     setValue4(value);
    //     if(value == "Fetch") {
    //       setHidden(false)
    //     }else{
    //       setHidden(true)
    //     }
    //   };