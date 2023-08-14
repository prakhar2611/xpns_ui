import React, { useState } from 'react';
import { Button, Form, Input, Radio,Layout,message} from 'antd';
import { DownloadAndPlay } from '../../Utils/Player';
import axios from 'axios'
import { Y2sList } from '../../Components/Y2S/Y2slist';


const { Header, Content, Footer, Sider } = Layout;

export function ChangeDisableStop() {
    
}

export function CallKillProcess() {

    axios.get('https://teencross.dev/ydl/api/v1/kill',{
        headers: {
            'Content-Type': 'application/json',
         },
    }).then((response) => { if(response.status == 200) {
        return true
     }
    }
    )
      .catch(error => {
        console.error(error);
        return false
      }); 
    }

export function UtilHandle(s) {
    var payload
    if (s == "UP") {
         payload = {
                'volume': "UP",
                'step_size': 10,
                'mute': false
        }
    }else if(s == "DOWN") {
         payload = {
            'volume': "DOWN",
            'step_size': 10,
            'mute': false
         }
    }else if(s == "MUTE") {
        payload = {
           
           'mute': true
         }
    }
    console.log(payload)
    axios.post('https://teencross.dev/ydl/api/v1/mixer',JSON.stringify(payload),{
        headers: {
            'Content-Type': 'application/json',
         },
    }).then((response) => { if(response.status == 200) {
        console.log("mixer response",response)
        return true
     }
    }
    )
      .catch(error => {
        console.error(error);
        return false
      }); 
    

}
   
export function Y2s() {

    const [messageApi, contextHolder] = message.useMessage();
    const [payload,setpayload] = useState("") 
    const [disabled,setdisabled] = useState(false) 
    const [killvalue,setkillvaue] = useState( "" ) 
   // const [disbaleStop,setdisablestop] = useState(true)


    function callDownloadAndPlay () {
        const p = {
            'url' : payload,
            'play' : true
        }
            console.log("update payload :",p);
            return axios.post('https://teencross.dev/ydl/api/v1/download', JSON.stringify(p),{
                headers: {
                    'Content-Type': 'application/json',
                 },
            }).then((response) => { if(response.status == 200) {
                setdisabled(true)
                setkillvaue(response.data.pid)
                console.log(response.data.pid)
                //setdisablestop(false)
             }
            }
            )
              .catch(error => {
                console.error(error);
                throw error;
              }); 
         

    }

    const kill = () => {
             if(CallKillProcess()){
                //setdisablestop(true)
             }
        
        setdisabled(false)
    }

    function captureUrl(url) {
        setpayload(url)
    }

    return(
        
         <Layout style={{background : "#7490AB" ,padding : "100px"}}>
      <Layout className="layout">
        <Content style={{padding : 30 }}>
        <Form.Item >
        <Input disabled={disabled} onChange={(e)=>captureUrl(e.target.value)} placeholder="Please Enter YOutube Link" />
        <Button type="primary" onClick={callDownloadAndPlay}>Play-save</Button>
        {/* <Button disabled={disbaleStop} type="primary" onClick={kill}>Stop</Button> */}
        <Button  type="primary" onClick={kill}>Stop</Button> 
        <Button  type="primary" onClick={()=>UtilHandle("UP")}>Vol Up</Button> 
        <Button  type="primary" onClick={()=>UtilHandle("DOWN")}>Vol Down</Button> 
        <Button  type="primary" onClick={()=>UtilHandle("MUTE")}>Mute</Button> 


        <Y2sList/>
       
        </Form.Item>
        </Content>
      </Layout>
      <Footer
          className="layout" 
        >
          @XPNS
        </Footer>
    </Layout>
        
        
    );
}