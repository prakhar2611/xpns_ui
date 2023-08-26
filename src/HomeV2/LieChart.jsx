// ./components/LineChart.js

import {React, useEffect,useState} from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { FetchGroupedVPA} from '../Utils/FetchSyncWorker';





const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

export function LineChart() {
    const [data1,setdata1] = useState()
    const [lineCols,setlineCol] = useState(labels)
    const [fetched,setfetched] = useState(false);
    var [limit,setlimit] = useState(10)
    var [offset,setoffset] = useState(0)
    const token = sessionStorage.getItem('access_token');

    useEffect( () => {
        FetchGroupedVPA(limit,offset,token).then((res) => {
            console.log("reposne data " , res)
            const labelVpa=[] 
            res.map(x=>{ 
                console.log(x)
                labelVpa.push(x.vpa)
                console.log(labelVpa)
            })

            const d = {
                labels: labelVpa,
                datasets: [
                    {
                    label: "My First dataset",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    data: [0, 10, 5, 2, 20, 30, 45],
                    },
                ],

            }
            setdata1(d)
            console.log('d:',d)
            console.log('data1:',data1)
            },(err) => {
            alert(err)
            })
        setfetched(true)
        setlimit(+10)
        setoffset(+10)
        } , [1])
        
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

