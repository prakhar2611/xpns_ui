import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton } from 'antd';
import axios from 'axios'
import { CallKillProcess } from '../../Page/Home/Y2s'; 

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


export function Y2sList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    axios.get('http://localhost:8000/ydl/api/v1/list',{
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
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}>
      {/* <List
            dataSource={data}
            
          /> */}
      <List style={{'backgroundColor':'black','display':'flex','justifyContent':'space-around'}}
          dataSource={data}         
          renderItem={(item) => (
          <List.Item onClick={()=>play(item)} key={item}>    
          {console.log(item)}
            <List.Item.Meta style={{'backgroundColor':'black'}} title={<a>{item}</a>}/>
          </List.Item>
          )}
        />
    </div>
  );
};
