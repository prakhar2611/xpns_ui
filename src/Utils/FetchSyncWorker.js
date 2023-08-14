
import axios from 'axios'
import React, { useState,useEffect } from 'react';


export function SyncWorker (token,from,to,label)  {

        console.log("Request payload for Syncing data : ", `https://teencross.dev/SyncMail?label=${label}&to=${to}&from=${from}` )
        const URL = `https://teencross.dev/SyncMail?label=${label}&to=${to}&from=${from}`;

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
    console.log("Request payload for fetching the data : ", `https://teencross.dev/expense/api/v1/getExpense?from=${from}&to=${to}&label=${label}` )

    const URL = `https://teencross.dev/expense/api/v1/getExpense?from=${from}&to=${to}&label=${label}`;
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
  return axios.post('https://teencross.dev/expense/api/v1/UpdateVpaMapping', JSON.stringify(p),{
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
 
  console.log("Request payload for fetching the data : ", `https://teencross.dev/expense/api/v1/getXpnsByVpa` )


       return      axios.get(`https://teencross.dev/expense/api/v1/getXpnsByVpa?label=HDFC&limit=${limit}&offset=${offset}`,{
            headers: {           
                'Content-Type': 'application/json',
                'token' :  token
            },        
        })
        .then(response => response.data
        )
            .catch(error => console.error(error));
 
}