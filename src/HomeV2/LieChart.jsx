// ./components/LineChart.js

import {React, useEffect,useState} from "react";
import Chart from "chart.js/auto";
import { Line,Bar } from "react-chartjs-2";
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
    const [assets, setAssets] = useState();
    const [chartData, setChartData] = useState({
        
        datasets: []
      });
    const [lineCols,setlineCol] = useState(labels)
    const [fetched,setfetched] = useState(false);
    var [limit,setlimit] = useState(10)
    var [offset,setoffset] = useState(0)
    const token = sessionStorage.getItem('access_token');

    useEffect( () => {
        FetchGroupedVPA(limit,offset,token).then((res) => {
            console.log("reposne data " , res)
            const labelVpa=[] 
            const amt=[] 
            res.map(x=>{ 
                // console.log(x)
                labelVpa.push(x.vpa)
                amt.push(x.totalAmount)
                // console.log(labelVpa)
                // console.log(amt)
            })
            setAssets(amt)
            console.log('assets',assets)

            // const d = {
            //     labels: labels,
            //     datasets: [
            //         {
            //         label: "My First dataset",
            //         backgroundColor: "rgb(255, 99, 132)",
            //         borderColor: "rgb(255, 99, 132)",
            //         data: [0, 10, 5, 2, 20, 30, 45],
            //         },
            //     ],

            // }
            // setdata1(d)
            console.log('y',amt)
            console.log('x',labelVpa)
            setChartData({
                labels: [...labelVpa], 
                datasets: [{data: amt,label:'vpa by amount'} ]
        })
            // console.log('d:',d)
            // console.log('data1:',data1)
            },(err) => {
            alert(err)
            })
        setfetched(true)
        setlimit(+10)
        setoffset(+10)
        } , [])
        
  return (
    <div style={{'display':'flex','height':'30vh','flexGrow':1}}>
      <Bar data={chartData} />
    </div>
  );
};

