import { Avatar, Space,Card  } from 'antd';
//import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios'


function UserProfile() {
    const [picture,setpicture] = useState('')
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const navigate  = useNavigate ();
    
    var token = sessionStorage.getItem('access_token');
    axios.get('http://localhost:9005/api/User/v1/GetUserProfile',{
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
    <div>
    <Space direction="vertical" size={20}>
    <Avatar size={80} src={picture} />
    </Space>
    <Card title={name} bordered={false} style={{ width: 300 }}>
    <p>{email}</p>
    <p>Welcome to dashboard. You can manage your expenses here. </p>
  </Card>
  </div>
   
  
       );
}

export default UserProfile ;