import React, { createContext } from "react"
import Comp from "./comp3"
// To create context for firstname and lastname
const Fname = createContext(); 
const Lname = createContext();
function Main(){
 return (
 <>
 <Fname.Provider value="ABC"> 
 <Lname.Provider value="XYZ">
 <Comp/>
 </Lname.Provider>
 </Fname.Provider>
 </>
 ) }
export default Main
export {Fname,Lname} 
