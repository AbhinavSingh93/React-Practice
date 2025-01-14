import { use } from "react";
import { useState } from "react";

function App(){
  const [selected,setselected]=useState(false);

  function handleSelect(clicked){
        setselected(clicked);
  }
  return (
      <div>
        <p className={selected ?"active":""}>Style me!</p>
        <button onClick={()=>handleSelect(!selected)}>Toggle Style</button>
      </div>
  );
}

export default App;