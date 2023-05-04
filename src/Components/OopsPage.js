import SyncMailForm from "./SyncMailForm";
import { useSearchParams, redirect  } from "react-router-dom";


export function OopsPage() {
    // Retrieve the query parameters from state or sessionStorage
    // ...
    const  click = async () => { 
        return redirect("/OopsPage");   
     }; 
  
    return (
     <div>
      <h1>OOPS sorry for inconvinence !</h1>
      <button onClick={click}>Home</button>
     </div>
    );
  }

