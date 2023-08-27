import React ,{useState} from 'react';
import "./homepage.css"
import { Layout, Menu, theme, Box ,Tooltip} from 'antd';
// import { Navigation } from './Navigation';
import { Navigation } from '../Page/Home/Navigation.js'
import { AppstoreOutlined,ArrowUpOutlined,ArrowDownOutlined,InfoCircleOutlined ,MailOutlined, SettingOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

import {ArrrowIcon, FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
import {'App' as App} from './Infiniter.jsx';
import {'LineChart' as LineChart} from './LieChart.jsx';
import { Theme ,ThemePanel} from '@radix-ui/themes';
import { Flex,Text,Button,Heading ,Em,Strong,Separator} from '@radix-ui/themes';

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
  const [dashboard, setDashboard] = useState({thisMonth:32453,difference:-1.2,count:42,labelled:13});
  const [topVPA,setTopVpa] = useState({
                                      vpa:{"swiggy":{"label":null,"amt":7583},
                                            "ola":{"label":null,"amt":2031}
                                          }})
  const navigate  = useNavigate ();


  function navigateLayout() {
    navigate('/layout')
  }

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
      <Theme>
     <Header style={{
            padding: 0,
            // background: "#2B4B55",
            // color : "#2B4B55"
          }}
        >
{/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />         */}
    </Header>
    <Content style={{display:'flex',height:'40vh',gap:'2rem',padding:'1rem',
                    justifyContent:'space-around' ,  alignContent: 'stretch',backgroundColor:'teal'}}>
    
    <div className="container">
      <div  >
          <Flex className="tile1"> 
            <span><Heading  mb="1"  size="8">This Month <Tooltip title="summary of this month"> <InfoCircleOutlined style={{'fontSize':'16px'}}/></Tooltip></Heading></span>
            <Separator horizontal="vertical" size="5" mb="3"/>
            <Flex gap="7">
              <div >
              <span>
                <Text color='#ffaaff' size="9" mb="2" weight="medium"  > {dashboard.thisMonth}</Text>
              {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> */}
              {/* <ArrowUpOutlined style={{ fontSize: '26px', color: '#aa0000' }}/> */}
              </span>
              <br/>
              <Text >
              
                <Em> {Math.abs(dashboard.difference)}%  </Em> <ArrowDownOutlined style={{ fontSize: '26px', color: '#55aa44' }} /> from 
                <Strong> last month </Strong> 
              <Tooltip title="comparing the last month at the same time"> <InfoCircleOutlined style={{'fontSize':'.6rem'}}/></Tooltip>
              </Text>
              </div>
              <Separator orientation="vertical" size="4" />
              <div>
                <span><Text color='#ffaaff' size="9" mb="2" weight="medium"  > {dashboard.count} </Text>
                {/* <Text><Em> {Math.abs(dashboard.difference)}%  </Em> <ArrowDownOutlined style={{ fontSize: '26px', color: '#55aa44' }} /></Text> */}
                
              {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> */}
              {/* <ArrowUpOutlined style={{ fontSize: '26px', color: '#aa0000' }}/> */}
              {/* <ArrowDownOutlined style={{ fontSize: '26px', color: '#55aa44' }} /> */}
              </span><br/>
              <Text >
                transactions recorded  
              <Tooltip title="transactions fetched from email"> <InfoCircleOutlined style={{'fontSize':'.6rem'}}/></Tooltip>
              </Text>
              </div>
              <Separator orientation="vertical" size="4" />
              <div>
                <span><Text color='red' size="9" mb="2" weight="medium"  > {dashboard.count- dashboard.labelled}</Text>
              {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> */}
              {/* <ArrowUpOutlined style={{ fontSize: '26px', color: '#aa0000' }}/> */}
              {/* <ArrowDownOutlined style={{ fontSize: '26px', color: '#55aa44' }} /> */}
              </span><br/>
              <Text >
                <Em>
                  un-labelled  
                  </Em> transactions!
                  <Tooltip title="labels are autoassigned to VPAs based past inputs"> <InfoCircleOutlined style={{'fontSize':'.6rem'}}/></Tooltip>
              </Text>
              

              </div>
              
             </Flex>
     
          </Flex>
      
        <Flex  className="tile2">
          <Heading  mb="1"  size="8">Highlights </Heading> 
          <Separator horizontal="horizontal" size="5" mb="3"/>
          <ul>
            <li>
              <span>Swiggy</span>
              <span>{topVPA.vpa.swiggy.label} </span>
              <span>{topVPA.vpa.swiggy.amt} </span>
              </li>
            <li>
              <span>ola</span>
              <span>{topVPA.vpa.ola.label} </span>
              <span>{topVPA.vpa.ola.amt} </span>
              </li>
              </ul>
            
        </Flex>

      </div>
      <div>
        <div className="kpis">
            3
        </div>
        <div className="kpis">
            4
        </div>

      </div>
    </div> 

    <div className ="action" >
      <Button> 
        Sync
      </Button>
      <Button onClick={navigateLayout}> 
        Configure
      </Button>
      <Button> 
        Review
      </Button>
      
      
    </div> 
</Content>


<Content className="container2">
  
  <div style={{'backgroundColor':'white','display':'flex','flex':'1'}}>
    <LineChart style={{'width':'100%'}} />
    
  </div> 
</Content>
<Content className="container3"> 
  {/* <App/> */}
  <Navigation index={2} />
</Content>
{/* <ThemePanel /> */}
</Theme>
</Layout>
  );
};



