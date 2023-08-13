import { FetchRaw } from "./Home/FetchComponent";
import UserProfile from "./Home/UserProfile";
import {Collapse,Space, Col, Row} from 'antd';

const { Panel } = Collapse;


export function Welcome() {
    // Retrieve the query parameters from state or sessionStorage
    // ...
    // axios.Get('http://localhost:9005/api/User/v1/GetUserProfile',{
    //     headers: {
    //         'Content-Type': 'application/json',
            
    //      },
    // })
    //   .then(response => {
    //     console.log(response.data);
    //     if (response.data.status == true) {
    //         navigate('/Welcome');
    //     }
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     navigate('/Oops');
    //   });



    return (
      <Row >
    <Col xs={{ span: 5, offset: 1 }}>
    <Row style ={{ background: '#16A085',
  padding: '8px 0'}} xs={{span : 3}} > <UserProfile/></Row>


    </Col>
    <Col style = {{ background: '#F9F9F9',
  padding: '8px 0'}} xs={{ span: 13, offset: 2 }}>
    <FetchRaw />  
    </Col>
    
  </Row>

    //  <div className="center">
    //    <UserProfile/>
    //   <Collapse >
    //   <Panel header="Fetch raw Transactions" key="1">
    //   <FetchRaw />   
    //   </Panel>
    //   {/* <Panel header="Sync Mail" key="2">
    //   <SyncMailForm />
    //   </Panel> */}
    // </Collapse>
  // </div>
    );
  }

