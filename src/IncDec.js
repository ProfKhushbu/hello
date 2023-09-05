import React,{useState} from 'react'
function Hooks() 
{
 const[num,setNum] = useState(20);
 function increment() {
    setNum (num+1);
         };
 function decrement() {
    if (num !=0)
     {
      setNum (num-1) }
   };
    return (
      <div>
         <button onClick = {increment}> Increment</button>     
         <button onClick = {decrement}> Decrement</button>     
         <p>My Age is:{num}</p>
      </div>
  ) }
  export default Hooks