import React, { useState } from "react";
function Event2() {

  let [Name, setname] = useState('');
 
  function handleChange(event) {
    console.log (event.target.value)
    setname(event.target.value)
  }
  return (
    <div>
    <input value={Name} onChange={handleChange} />
    <br></br>
    {Name}
    </div>
  )
}
export default Event2;