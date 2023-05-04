import { FetchRaw } from "./FetchTxns/FetchComponent";
import SyncMailForm from "./SyncMailForm";
import UserProfile from "./UserProfile";
import {DataGrid} from './FetchTxns/DataGrid';
import {Collapse} from 'antd';

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
     <div class="center">
<UserProfile/>
<Collapse >
      <Panel header="Fetch raw Transactions" key="1">
      <FetchRaw />   
      </Panel>
      <Panel header="Sync Mail" key="2">
      <SyncMailForm />
      </Panel>
    </Collapse>

      
      
      
     </div>
    );
  }

