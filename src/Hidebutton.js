import React,{useState} from 'react'
const Hidebutton =() =>{  
const[show,setShow]= useState(false);
const[buttontext,setButtontext]= useState("show the value")
const[text,setText]= useState("")
function showhide() {
      setShow(!show);
      if(show===false)
      {
        setButtontext("hide");
        setText("Hello");
      }
      else{
        setButtontext("show");
        setText("");      
    } }
  return (
    <div>
   <button onClick = {showhide}> {buttontext}</button> 
   {text}    
   </div>
  ) }
   export default Hidebutton;