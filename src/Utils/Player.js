
import axios from 'axios'
import React, { useState,useEffect } from 'react';


export function DownloadAndPlay (p)  {

  console.log("update payload :",p);
  const d_url = 'http://192.168.1.5:8000/ydl/api/v1/download'
  // const d_url = 'localhost:8000/ydl/api/v1/download'
  return axios.post(d_url, JSON.stringify(p),{
      headers: {
          'Content-Type': 'application/json',
       },
  }).then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    }); 
}   

