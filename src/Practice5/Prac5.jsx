import {useState} from 'react';

import DiscounButton from './DiscountButton.jsx';
function App(){
  const[selectedPrice,setselectedPrice]=useState(100);
  function handleSelect(price){
    setselectedPrice(price)
  }
  return(
    <div>
      <DiscounButton onSelect={()=>handleSelect(75)}>Apply Discount</DiscounButton>
      ${selectedPrice}
    </div>
  );
}
export default App;