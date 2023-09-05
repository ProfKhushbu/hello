import React from 'react';
function Ex1 () {
    const mystyle=
    {
      fontSize:"40px",
      color:"green",
      textTransform:"uppercase"
    }
    return (
      <div>
        <h1 style={mystyle}>Demo1</h1>      
        <p style={{backgroundColor:"pink" ;textAlign:"center"}}>Adding style1</p>      
      </div>
    );
  
  }
  
    export default Ex1