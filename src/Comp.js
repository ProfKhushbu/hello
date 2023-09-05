import React, { createContext } from "react"
import Ex1 from "./comp1"
const Fname = createContext(); 
const Lname = createContext();
function Comp(){
    return (
        <Fname.Provider value="Abc">
        <Lname.Provider value="Def">
               <Ex1 />
               </Lname.Provider>
               </Fname.Provider>
       
       
       
        )
       
}
export default Comp
export {Fname,Lname}
