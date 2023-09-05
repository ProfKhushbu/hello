import React, { useRef, useEffect } from 'react'

const ExampleRef = () => {
const divElement = useRef();
useEffect (() =>{
    console.log("The heigh of div is:",divElement.current.offsetHeight);
}
,[]);


  return (
    <div ref={divElement}>
      <h1> Learn ABOUT UseRef</h1>
      <h2> Learn ABOUT UseRef</h2>
      <h1> Learn ABOUT UseRef</h1>
    </div>
  );
}

export default ExampleRef
