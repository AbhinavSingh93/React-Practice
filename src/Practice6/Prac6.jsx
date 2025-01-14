import { useState } from "react";
import { HandleButton } from "./Handlebutton";

function App(){
  const[isDeleting,setIsDeleting]=useState(false)
  function handleSelect(clicked){
    setIsDeleting(clicked);
  }
  
  return(
    <div>
      {!isDeleting && (
        <HandleButton onSelect={()=>handleSelect(true)}>Delete</HandleButton>
      )}
      {isDeleting && (
        <div id="alert">
          <h1>Are you Sure?</h1>
          <p>These Changes can't be reverted</p>
          <HandleButton onSelect={() => handleSelect(false)}>Proceed</HandleButton>
        </div>
      )}
    </div>
  );
}

export default App;