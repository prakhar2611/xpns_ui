import { Avatar, Space,Card,Row,Col,Statistic } from 'antd';
//import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios'


const style: React.CSSProperties = { background: '#0092ff', padding: '0px',  };


//always keep component function first name in capital case
function GetProfileTile({name,email}){
  return (
    <div >
      <Space size={'xs'}>
      <Card  title={name} bordered={false} >
        <p>{email}</p>
        <p>Welcome to dashboard. You can manage your expenses here. </p>
      </Card>
     </Space>
    </div>
  )
}

function GetLayout({name,email,month = "Januray"}) {
  return(
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>
        <GetProfileTile name={name} email={email}/>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div ></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <Statistic title="Total Expense " value={112893} />
          <h1>Month : {month}</h1>
          </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  )
}

function UserProfile() {
    const [picture,setpicture] = useState('')
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const navigate  = useNavigate ();
    
    var token = sessionStorage.getItem('access_token');
    axios.get('http://192.168.1.5:9005/api/User/v1/GetUserProfile',{
        headers: {           
            'Content-Type': 'application/json',
            'token' :  token
         },        
    })
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
            setpicture(response.data.picture)
            setname(response.data.name)
            setemail(response.data.email)
        }else {
            navigate('/SignIn');
        }
      })
      .catch(error => {
        console.error(error);
        navigate('/');
      });

    return (
      <GetLayout name={name} email={email}/>
        // <GetProfileTile name={name} email={email}>
        // </GetProfileTile>
       );
}

export default UserProfile ;