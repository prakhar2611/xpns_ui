
import { Space, Table,Button, Tag,Select,Input } from 'antd';
import { useState, useEffect } from "react";
import { ColumnProps } from "antd/lib/table";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'




export function DataGrid({isfetched,data}) {
    // for(int i =0; i<length(data) ;)
    // var i
    // for(i=0; i < data.length; i++){
    //    data.key = i+1
    // }

    //const [tableData, setTableData] = useState(data);
    var [payload,setpayload] = useState({})
    const [loadings, setLoadings] = useState([]);
    const [disable,setdisable] = useState(true); 

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

       
        //calling server to update the category
        var token = sessionStorage.getItem('access_token');
        const p = {
            'data' : payload
        }
        console.log("update payload :",p);
        axios.post('http://192.168.1.5:9005/expense/api/v1/Update', JSON.stringify(p),{
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
            navigate('/OopsPage');
          });     
    };

    const onInputChange = (key, index,value) => {
        var y = payload

        // payload.get
        if (index in y ) {
            var i = y[index]
            i[key] = value
            y[index] = i 
        }
        else {
            var o = {}
            o[key] = value
            y[index] = o
        }


        // y.push(d)
        setpayload(y)
        setdisable(false)

        console.log("payload data :" , payload)

        //solution to save the changes on the same data, dta should have key and need to pass index as record.key
        // console.log("value of the input :",value)
        // var newData = [...tableData];
        // console.log("vlaue of new index,key :", newData[1]["amount_debited"] )
        // newData[index][key] = value;
        // setTableData(newData);
      };

      const getDeafaultvalue=(category) => {
        return category
      }

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
            <Select defaultValue={record.category} style={{display: 'flex'}} onChange={(value) => onInputChange("category", record.msgId,value)}>
                 <Select.Option value="SWIGGY">Swiggy</Select.Option>
                <Select.Option value="INSTAMART">Instamart</Select.Option>
                <Select.Option value="RENT">Rent</Select.Option>
                <Select.Option value="DINEOUT">DineOut</Select.Option>
                <Select.Option value="STUFF">Stuff</Select.Option>
                <Select.Option value="TOBACCO">Tobacco</Select.Option>
                <Select.Option value="LIQOUR">Liqour</Select.Option>
                <Select.Option value="ELECTRICITY">Electricity</Select.Option>
                <Select.Option value="COOK">Cook</Select.Option>
                <Select.Option value="CAB">Cab</Select.Option>
                <Select.Option value="TEA">Tea</Select.Option>
                <Select.Option value="To ACC">To ACC</Select.Option>




                </Select>
            // <Input value={text} onChange={onInputChange("goals", index)} />
          )
        },
        {
            title: 'Label',
          dataIndex : 'label',
          key: 'label',
            render: (text, record) => (
              <Input defaultValue={record.label} onChange={(e) => onInputChange("label", record.msgId,e.target.value)} />
            )
          },
      ];

      if (isfetched == false) {
        return null
      }
      return (
    <div>
        <Table columns={columns} dataSource={data} rowKey={record => record.key}/>
        <Button type="primary" disabled={disable} loading={loadings[0]} onClick={() => onConfirm(0)}>
            Submit
        </Button>
    </div>
      );

}
