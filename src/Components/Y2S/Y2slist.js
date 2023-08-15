import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton } from 'antd';
import axios from 'axios'
import { CallKillProcess } from '../../Page/Home/Y2s'; 
import styled from "styled-components";
import { keyframes } from "styled-components";

// import AnimatedGradientBg,AnimatedGradientText from ''
var   nextId =0 

export function PlaySong(song){

    
        const p = {
            'uri':String(song)
         }
         
         console.log("play object :",p )
        axios.post('http://localhost:8000/ydl/api/v1/play', JSON.stringify(p),{
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
  background: linear-gradient(to right, #fe6, #784da9, #red, #green);
  
  background-size: 1000%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export function Y2sList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const b_url = 'http://192.168.1.5:8000/ydl/api/v1'
  // const b_url = 'http://localhost:8000/ydl/api/v1'
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    
    axios.get(b_url+'/list',{
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


  return (
    <div
      id="scrollableDiv"
      style={{
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}>
      {/* <List
            dataSource={data}
            
          /> */}
          {/* <AnimatedGradientBg style={{"display":"flex","overflow":'hidden','width':'100vh','position':'absolute',"margin":'0',"width":'100%',"height":'100vh','opacity':'.8'}}>  <>
              <AnimatedGradientText style={{"fontSize":'5.5rem','opacity':'1',
      "fontFamily": "Helvetica",
      "overflow":"auto",
      "textAlign":'center',}}>SICKO MODE.mp4</AnimatedGradientText>
              </></AnimatedGradientBg> */}
      <List 
          dataSource={data}         
          renderItem={(item) => (
          <List.Item style={{'backgroundColor':'none','display':'flex','justifyContent':'center','flexDirection':'row'}} onClick={()=>play(item)} key={item}>    
          {console.log(item)}
            <List.Item.Meta style={{'background':'none','display':'flex','justifyContent':'space-around'}} title=
            { <AnimatedGradientBg style={{"display":"flex",'justifyContent':'space-around',"overflow":'hidden','width':'100vh','position':'absolute',"margin":'0',"height":'100vh','opacity':'.5'}}>  <>
            <AnimatedGradientText style={{"fontSize":'3rem','opacity':'1','margin':'.2rem 0 .2rem 0',
    "fontFamily": "Helvetica",
    "overflow":"auto",
    "textAlign":'center',}}>{item}</AnimatedGradientText>
            </></AnimatedGradientBg>}/>
          </List.Item>
          )}
        />
    </div>
  );
};
