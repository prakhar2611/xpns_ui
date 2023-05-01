import { FetchRaw } from "./FetchRaw";
import SyncMailForm from "./SyncMailForm";

export function Welcome() {
    // Retrieve the query parameters from state or sessionStorage
    // ...
  
    return (
     <div>
      <FetchRaw />
      <SyncMailForm />
     </div>
    );
  }

