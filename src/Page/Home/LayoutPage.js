import React ,{useState} from 'react';
import "../SignInLanding.css"
import { Layout, Menu, theme } from 'antd';
import { Navigation } from './Navigation';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

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


export const LayoutPage = () => {
  const [component,setcomponent] = useState(4)
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

  function renderComponent() {
    console.log("component rerender")
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
    <Layout>
      <Layout style={{containerStyle}}>
        <Header style={{
            padding: 0,
            background: "#2B4B55",
            color : "#2B4B55"
          }}
        >
<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />        
</Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
          <Navigation index={component} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          @XPNS
        </Footer>
      </Layout>
    </Layout>
  );
};



