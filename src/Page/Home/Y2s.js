
import React, { useState } from 'react';
import { Button, Form, Input, Radio,Layout,message} from 'antd';
// import './test.css';
import { DownloadAndPlay } from '../../Utils/Player';
import axios from 'axios'
import { Y2sList } from '../../Components/Y2S/Y2slist';

// import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

/**
 * Example Text Gradient Animation
 */
// export default function TextGradientComponent() {
//   return (
//     <>
//       <AnimatedGradientText>Hi, I'm Alexander</AnimatedGradientText>
//     </>
//   );
// }

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}

100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const AnimatedGradientBg = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #aea, #fe6, #784da9, #1bf893);
  
  background-size: 500%;
  background-clip: text;
  // -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const { Header, Content, Footer, Sider } = Layout;

export function ChangeDisableStop() {
    
}

export function CallKillProcess() {
    const k_url = 'http://192.168.1.5:8000/ydl/api/v1/kill'
    // const k_url = 'http://localhost:8000/ydl/api/v1/kill'
    axios.get(k_url,{
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
    const mx_url = 'http://192.168.1.5:8000/ydl/api/v1/mixer'
    // const mx_url = 'localhost:8000/ydl/api/v1/mixer'
    axios.post(mx_url,JSON.stringify(payload),{
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
    // const base_url = 'http://localhost:8000/ydl/api/v1/download'
    // const url = 'https://teencross.dev/ydl/api/v1/download'
    // const [disbaleStop,setdisablestop] = useState(true)
    
    function callDownloadAndPlay () {
      const p = {
        'url' : payload,
        'play' : true
      } 
      console.log("update payload :",p);
                    
      const d_url = 'http://192.168.1.5:8000/ydl/api/v1/download'
      // const d_url = 'localhost:8000/ydl/api/v1/download'
            return axios.post(d_url, JSON.stringify(p),{
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
    function get_meta () {
        const p = {
            'url' : payload,
            'play' : true
        }
            console.log("update payload :",p);
        const d_url = 'http://192.168.1.5:8000/ydl/api/v1/download'
      // const d_url = 'localhost:8000/ydl/api/v1/download'
            return axios.post(d_url, JSON.stringify(p),{
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

    const stl_header =  {
      color: "white",
      backgroundColor: "grey",
      height:'10vh',
      // padding: "10px",
      // display:'flex',
      // justifyContent:'center',
      fontSize:'30pt',
      fontFamily: "Helvetica",
      overflow:"hidden",
      textAlign:'center'
      // textAlign:'justify'

    };
    const aspan={
      backgroundColor:'red',
      width:'100%',
      height:"1em",
      display:'inline-block'
    };
    
    const stl_toolbar =  {
      // wrap:'nowrap',
      // whiteSpace: 'nowrap',
      flex:1,
      padding: ".1rem",
      // alignContent:'center',
      color: "white",
      display: "flex",
      height:'10vh',
      // width:'80vw',
      alignItems:'center',
      flexDirection : 'column',
      justifyContent :'flex-start',
      backgroundColor: "white",
      // alignItems: 'stretch'
      
    };
    const stl_form =  {
      // color: "white",
      // margin:'auto',
      // display: "flex",
      // justifyContent :'space-around',
      // alignItems:'center',
      backgroundColor: "pink",
      
    };

    const stl_urlbar =  {
      // color: "white",
      // margin:'.2rem .5rem',
      // alignItems:'center',
      // flexGrow:1,
      margin: '1rem 0rem',
      padding: '2rem',
      // width: '80vw',
      // flexWrap: 'wrap',
      // border :'2px dotted #bbb',
      borderRadius:'2.5rem',
      textAlign: 'center',
      // justifyContent: 'center',
      // alignItems: 'center',
      // display: "flex",
      // flexDirection : 'column',
      // flexDirection:'center',
      // justifyContent:'center',
      backgroundColor: "#7490AB",
      // background: 'linear-gradient(to bottom, #eee 0%, #77ab9f 100%)'
      // background: 'linear-gradient(to bottom, #ffffff 0%, #BBB 100%)'
  
    };
    const stl_btns =  {
      // color: "white",
      // margin: '2rem 0rem',
      padding:'.2rem .5rem',
      margin:'1rem 0rem',
      // display: "flex",
      // backgroundColor: 'grey',
      

      flexDirection : 'row',
      // flexDirection:'center',
      // justifyContent:'space-around',
      // backgroundColor: "black",
  
    };

    const stl_btn =  {
      // color: "white",
      margin:'.2rem .5rem',
      
      // display: "flex",
      // flexDirection : 'column',
      // flexDirection:'center',
      // justifyContent:'center',
      backgroundColor: "#11ab9f",
  
    };

    const stl_list =  {
      color: "white",
      // display: "flex",
      // height:'100vh  ',
      // flex:1,

      flexDirection:'row',
      justifyContent:'center',
      // backgroundColor: "grey",
  
    };

    const some_css = { "backgroundColor":'red',"display":'flex'};

    return(
        // <div className='some_css'>
        //  <AnimatedGradientBg style={{"display":"block","overflow":'hidden',"margin":'0 0',"width":'100%'}}>BG</AnimatedGradientBg>
        <Layout style={{background : "#acaa99" , display:'flex',flexWrap: 'wrap',flexDirection:'column'}}>
           <Content>
            <AnimatedGradientBg style={{"display":"block","overflow":'hidden','position':'absolute',"margin":'0 0',"width":'100%',"height":'100vh','opacity':'.4'}}>  <>
              <AnimatedGradientText style={{"position":"relative", "fontSize":'5.5rem','opacity':'1',
      "fontFamily": "Helvetica",
      "overflow":"hidden",
      "textAlign":'center',}}>CURRENTLY PLAYING THIS REALLY NICE SONG</AnimatedGradientText>
              </></AnimatedGradientBg>
          {/* <div style={{'backgroundColor':'red','position':'abosolute','height':'100vh','z-index':'-1','opacity':'.4'}}></div> */}
          {/* <Layout style={{background : "#7490AB" ,padding : "100px",width: "100vw",height:"100vw"}}> */}
            {/* <Content style={{backgroundColor:'salmon'}}> */}
              {/* <Header className="header" style={stl_header}> */}
                
               </Content>
            
              {/* <span style={aspan}> */}
              {/* </span> */}
              {/* <p className='animated-gradient'> CURRENTLY PLAYING THIS </p> */}
              {/* <h1 class="closure">");</h1> */}
             
              {/* </Header> */}
              <Content className="toolbar" style={stl_toolbar}>
                
              
               
              
                <Form.Item  >
                <Input disabled={disabled}  style={stl_urlbar} onChange={(e)=>captureUrl(e.target.value)} placeholder="Please Enter Youtube Link" />
               
                <div className="btns" style={stl_btns} >
                  <Button className='btn' style={stl_btn} type="primary" onClick={callDownloadAndPlay}>Play-save</Button>
                  {/* <Button disabled={disbaleStop} type="primary" onClick={kill}>Stop</Button> */}
                  <Button   className='btn' style={stl_btn} type="primary" onClick={kill}>Stop</Button> 
                  <Button   className='btn' style={stl_btn} type="primary" onClick={()=>UtilHandle("UP")}>Vol Up</Button> 
                  <Button   className='btn' style={stl_btn} type="primary" onClick={()=>UtilHandle("DOWN")}>Vol Down</Button> 
                  <Button  className='btn' style={stl_btn} type="primary" onClick={()=>UtilHandle("MUTE")}>Mute</Button> 
                </div>

                </Form.Item>
            </Content>
            <Content className="list" style={stl_list}>
                <Y2sList/>
            </Content>

        {/* </Layout> */}
        {/* <Footer
            className="layout" 
          >
            @XPNS
          </Footer> */}
    </Layout>
   
        
    );
}