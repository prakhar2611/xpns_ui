import SyncMailForm from "./SyncMailForm";
import { useSearchParams, redirect  } from "react-router-dom";
import {useNavigate} from 'react-router-dom'


export function OopsPage() {
  const navigate  = useNavigate ();

    // Retrieve the query parameters from state or sessionStorage
    // ...
    function  click() { 
        return navigate("/Welcome");   
     }; 
  
    return (
     <div>
      <h1> Sorry for inconvinence !</h1>
      <button onClick={click}>Home</button>
     </div>
    );
  }

