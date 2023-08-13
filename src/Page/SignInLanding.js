import "./SignInLanding.css";
import { Collapse, Space, Col, Row, Card } from "antd";
import { Layout, Menu, theme } from "antd";
import {SignInCard} from "../Components/GoogleSingIn/SignInCard"

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

export const SignInLanding = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{background : "#7490AB" ,padding : "100px"}}>
      <Layout className="layout">
        <Content style={{padding : 30}}>
            <Card className="centerCard"
                  hoverable
                  cover={
                    <SignInCard />
                  }
                >
                  <Meta style={{}}
                    title="Manage Your Expense"
                    description="Get your expense insights and manage your saving !"
                  />
                </Card>
        </Content>
      </Layout>
      <Footer
          className="layout" 
        >
          @XPNS
        </Footer>
    </Layout>
    
  );
};

//<img className="img" alt="Img" src="https://generation-sessions.s3.amazonaws.com/b6b6068c21198b5044d90a6ebcc3b1c8/img/54b7b13a560d5d2c4c3ea48e92f32d9a-1.png" />