
import { Space, Table,Button, Tag,Select } from 'antd';
import { useState, useEffect } from "react";
import { ColumnProps } from "antd/lib/table";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'




export function DataGrid({isfetched,data}) {
    // for(int i =0; i<length(data) ;)

    //const [tableData, setTableData] = useState(data);
    var [payload,setpayload] = useState([])
    const [loadings, setLoadings] = useState([]);

    const navigate  = useNavigate ();
    
    const onConfirm = (index) => {

        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
          });
  
          setTimeout(() => {
              setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
              });
            }, 6000);

        console.log(payload);
        //calling server to update the category
        var token = sessionStorage.getItem('access_token');
        axios.post('http://localhost:9005/expense/api/v1/Update', JSON.stringify(payload),{
            headers: {
                'Content-Type': 'application/json',
                'token' :  token
             },
        })
          .then(response => {
            console.log(response.data);
            if (response.data.status == true) {
            }
          })
          .catch(error => {
            console.error(error);
            navigate('/Oops');
          });     
    };

    const onInputChange = (key, index,value) => {

        var d = {
            msgId : index,
            category : value
        }
        var y = [...payload]
        y.push(d)
        setpayload(y)

        console.log("payload data :" , payload)

        //solution to save the changes on the same data, dta should have key and need to pass index as record.key
        // console.log("value of the input :",value)
        // var newData = [...tableData];
        // console.log("vlaue of new index,key :", newData[1]["amount_debited"] )
        // newData[index][key] = value;
        // setTableData(newData);
      };


    const columns = [
        {
          title: 'ID',
          dataIndex: 'ID',
          key: 'ID',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
            title: 'ETime',
            dataIndex: 'etime',
            key: 'etime',
          },
        {
          title: 'TO',
          dataIndex: 'to_vpa',
          key: 'to_vpa',
        },
        {
            title: 'Amount',
            dataIndex: 'amount_debited',
            key: 'amount_debited',
          },
        {
          title: 'Category',
        dataIndex : 'category',
        key: 'category',
          render: (_, record) => (
            <Select defaultValue={{}} style={{display: 'flex'}} onChange={(value) => onInputChange("category", record.msgId,value)}>
                <Select.Option value="Instamart">Instamart</Select.Option>
                <Select.Option value="Store">Store</Select.Option>
                <Select.Option value="DineOut">DineOut</Select.Option>
                <Select.Option value="Stuff">Stuff</Select.Option>
                <Select.Option value="Subscription">Subscription</Select.Option>
                </Select>
            // <Input value={text} onChange={onInputChange("goals", index)} />
          )
        },
      ];

      if (isfetched == false) {
        return null
      }
      return (
    <div>
        <Table columns={columns} dataSource={data} rowKey={record => record.key}/>
       
        <Button type="primary" loading={loadings[0]} onClick={() => onConfirm(0)}>
            Submit
        </Button>
    </div>
      );

}
