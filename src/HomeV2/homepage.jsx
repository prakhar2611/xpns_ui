import React ,{useState} from 'react';
// import "../SignInLanding.css"
import { Layout, Menu, theme, Box } from 'antd';
// import { Navigation } from './Navigation';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {'App' as App} from './Infiniter.jsx';
import {'LineChart' as LineChart} from './LieChart.jsx';
const { Header, Content, Footer, Sider } = Layout;


const items = [
  {
    label: 'Navigation One',
    key: 'Profile',
    icon: <MailOutlined />,
  },
  {
    label: 'Configure',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Enums',
        children: [
          {
            label: 'All',
            key: 'all',
          },
          {
            label: 'By VPA',
            key: 'byVpa',
          },
          {
            label: 'Amount',
            key: 'amount',
          },
          
        ],
      },
      {
        type: 'group',
        label: 'Schedulers',
        children: [
          {
            label: 'Sync',
            key: 'sync',
          }
        ],
      }
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       Know More 
      </a>
    ),
    key: 'alipay',
  },
];

const containerStyle = {
  margin: "auto",
  width: "60%",
  height: "40%",
  border: "50px ",
  padding: "100px 20px 20px 20px",
};


export const HomePage = () => {
  const [component,setcomponent] = useState(1)
  const [current, setCurrent] = useState('mail');


  const onClick = (e) => {
    console.log('click ', e);
    if(e.key == 'Profile') {
        setcomponent(1)
    }else if(e.key == 'byVpa') {
      setcomponent(2)
    }else if(e.key == 'amount') {
      setcomponent(3)
    }else if(e.key == 'all') {
      setcomponent(4)
    }else if(e.key == 'sync') {
      setcomponent(5)
    }
    setCurrent(e.key);
  };


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    
    <Layout>
     <Header style={{
            padding: 0,
            // background: "#2B4B55",
            // color : "#2B4B55"
          }}
        >
<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />        
</Header>
<Content style={{display:'flex',height:'40vh',gap:'2rem',padding:'1rem',
                 justifyContent:'space-around' ,  alignContent: 'stretch',backgroundColor:'red'}}>
                  
    <div style={{'backgroundColor':'blue','flexGrow':3}}>KPIs
    </div> 

    <div style={{'backgroundColor':'cyan','flexGrow':1}}>Action
    </div> 
</Content>


<Content style={{display:'flex',height:'40vh',gap:'2rem',padding:'1rem', 
                justifyContent:'space-around' ,  alignContent: 'stretch',backgroundColor:'green'}}>
  
  <div style={{'backgroundColor':'white','display':'flex','flexGrow':3}}>
    
    <LineChart/>
  </div> 
</Content>
{/* <Content></Content> */}
<App/>
</Layout>
  );
};



