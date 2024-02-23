
import './App.css';
import { useState } from 'react';



function FavouriteColour() {
  const [colour,setColor] = useState("red")
  return (
   <div className='style'>
    <h1 style={{color: colour}}>My favorite color is {colour}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>


   </div>
  );
}



export default FavouriteColour;
