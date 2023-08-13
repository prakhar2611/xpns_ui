
import axios from 'axios'
import React, { useState,useEffect } from 'react';


export function DownloadAndPlay (p)  {

  console.log("update payload :",p);
  return axios.post('http://192.168.0.102:8000/download', JSON.stringify(p),{
      headers: {
          'Content-Type': 'application/json',
       },
  }).then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    }); 
}   

