//What will be the error in the following program :
import React, { useState } from 'react'
const Hook3 = () => {
 const[firstName,setFirstName]=useState("");
 function handleChange(e){ setFirstName(e.target.value); } 
 return (
 <div>
  <input name="firstName" value={firstName} onChange={handleChange}/>
  <h1>{firstName}</h1>  
 </div> 
 )}
export default Hook3



