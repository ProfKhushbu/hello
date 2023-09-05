import React, { useState, useEffect} from 'react';
function Calc(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [addResult, setAddResult] = useState(0);
  const [subResult, setSubResult] = useState(0);
  function handleAddition () {
    const sum = num1 + num2;
    setAddResult(sum);
  };
  function handleSubtraction() {
    const difference = num1 - num2;
    setSubResult(difference);
  };
  useEffect(()=>
  {
     alert("Added") 
  },[addResult]);
  return (
    <div>
        <h2>Addition and Subtraction</h2>
        <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} /> Number 1:
        <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} /> Number 2:
        <br/>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <p>Result of Addition: {addResult}</p>
        <p>Result of Subtraction: {subResult}</p>
     </div>
  )};
 export default Calc;