import React, { useEffect, useState } from 'react';
// import React, { useEffect, useState } from 'react';
// import VirtualList from 'rc-virtual-list';
// import {  message } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Card, Avatar, Divider, List, Skeleton } from 'antd';
import axios from 'axios'
import { CallKillProcess } from '../../Page/Home/Y2s'; 
import styled from "styled-components";
import { keyframes } from "styled-components";
// import {Rack } from './Y2sList_'

// import AnimatedGradientBg,AnimatedGradientText from ''
var   nextId =0 

export function PlaySong(song){

    
        const p = {
            'uri':String(song)
         }
         
         console.log("play object :",p )
        const p_url = 'http://192.168.1.5:8000/ydl/api/v1/play'
        // const p_url = 'http://localhost:8000/ydl/api/v1/play'
        axios.post(p_url, JSON.stringify(p),{
            headers: {
                'Content-Type': 'application/json',
             },
        }).then((response) => { if(response.status == 200) {
            console.log("response of play ",response) 

            
         }
        }
        )
          .catch(error => {
            console.error(error);
            throw error;
          }); 
    
    
  };

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
  // background: linear-gradient(to right, #fe6, #784da9, #red, #green);
  // background-color: white;
  &:hover {
    background: black;
    background: linear-gradient(to right, #fe6, #784da9, #red, #green);
    // background-color: lightblue;
  }

  background-size: 1000%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export function Y2sList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const b_url = 'http://192.168.1.5:8000/ydl/api/v1/list'
  // const b_url = 'http://localhost:8000/ydl/api/v1/list'
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    
    axios.get(b_url,{
        headers: {
            'Content-Type': 'application/json',
         },
    }).then((response) => { if(response.status == 200) {
        console.log(response.data['media'])
        setData(response.data['media'])

     }
    }
    )
      .catch(error => {
        console.error(error);
        throw error;
      }); 

      console.log(data)
  };

  const play = (song) => {
    console.log("Song to play -",song)
    if (PlaySong(song)) {
        console.log("Song played-",song)
    }
  }

 
  useEffect(() => {
    loadMoreData();
  }, []);
  //start of new list
  const dt = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ];
  

  return (
    <div
      id="scrollableDiv"
      style={{
        // overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
        // display:'flex',
        // justifyContent:'center'
      }}>
        
        {/* <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={dt}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  /> */}
      {/* <List
            dataSource={data}
            
          /> */}
          {/* <AnimatedGradientBg style={{"display":"flex","overflow":'hidden','width':'100vh','position':'absolute',"margin":'0',"width":'100%',"height":'100vh','opacity':'.8'}}>  <>
              <AnimatedGradientText style={{"fontSize":'5.5rem','opacity':'1',
      "fontFamily": "Helvetica",
      "overflow":"auto",
      "textAlign":'center',}}>SICKO MODE.mp4</AnimatedGradientText>
              </></AnimatedGradientBg> */}

        {/* <div style={{'backgroundColor':'none','display':'flex','justifyContent':'center','flexDirection':'row'}} onClick={()=>play(item)} key={item}>    
        {console.log(item)}
          <div>
          { <AnimatedGradientBg style={{"display":"flex",'justifyContent':'space-around',"overflow":'hidden','width':'100vh','position':'absolute',"margin":'0',"height":'100vh','opacity':'.5'}}>  <>
          <AnimatedGradientText style={{"fontSize":'3rem','opacity':'1','margin':'.2rem 0 .2rem 0',
  "fontFamily": "Helvetica",
  "overflow":"hidden",
  "textAlign":'center',}}>{item}</AnimatedGradientText>
          </></AnimatedGradientBg>}
        </div>
        </div> */}

      {/* upgraded from aug 15 */}

      <List 
          dataSource={data}         
          renderItem={(item) => (
          <List.Item style={{'background': 'linear-gradient(to right, #fe6, #784da9, #red, #green)'}} onClick={()=>play(item)} key={item}>    
          {console.log(item)}
            <List.Item.Meta style={{'backgroundColor':'rgba(0,0,0,.1)','padding':'1rem'}} title=
            {  <a>{item}</a>}/>
          </List.Item>
          )}
        />
      
  
    </div>
  );
};
