
import axios from 'axios'
import React, { useState,useEffect } from 'react';


export function SyncWorker (token,from,to,label)  {

        console.log("Request payload for Syncing data : ", `http://localhost:9005/SyncMail?label=${label}&to=${to}&from=${from}` )
        const URL = `http://localhost:9005/SyncMail?label=${label}&to=${to}&from=${from}`;

        return axios(URL, {
            method: 'GET',
            headers: {
              'content-type': 'application/json', 
              'token' :  token
            },
          })
            .then(response => response.data)
            .catch(error => {
              throw error;
            });
}   

export function FetchWorker(token,from,to,label,callback, errorcallback){
    console.log("Request payload for fetching the data : ", `http://localhost:9005/expense/api/v1/getExpense?from=${from}&to=${to}&label=${label}` )

    const URL = `http://localhost:9005/expense/api/v1/getExpense?from=${from}&to=${to}&label=${label}`;
    return axios(URL, {
    method: 'GET',
    headers: {
      'content-type': 'application/json', 
      'token' :  token
    },
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

}

export function UpdateVPAMapping(p,token){
  console.log("update payload :",p);
  return axios.post('http://localhost:9005/expense/api/v1/UpdateVpaMapping', JSON.stringify(p),{
      headers: {
          'Content-Type': 'application/json',
          'token' :  token
       },
  }).then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });     
}

export function FetchGroupedVPA(limit,offset,token){
 
  console.log("Request payload for fetching the data : ", `http://localhost:9005/expense/api/v1/getXpnsByVpa` )


       return      axios.get(`http://localhost:9005/expense/api/v1/getXpnsByVpa?label=HDFC&limit=${limit}&offset=${offset}`,{
            headers: {           
                'Content-Type': 'application/json',
                'token' :  token
            },        
        })
        .then(response => response.data
        )
            .catch(error => console.error(error));
 
}