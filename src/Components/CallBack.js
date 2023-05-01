import {Redirect} from 'react'
import { useSearchParams } from "react-router-dom";
import { Welcome } from './Welcome';



export function CallbackRoute() {
    //const [searchParams] = useSearchParams();
    const searchParams = new URLSearchParams(window.location.href)
    console.log(searchParams);
    const access_token = searchParams.get("access_token")

    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    
    // const access_token = searchParams.get('access_token');
    sessionStorage.setItem('access_token', access_token);

    console.debug(access_token);
    
  
    // Save the query parameters to state or sessionStorage
    // ...
  
    // Redirect to the welcome page
    return <Welcome />;
  }
  
  