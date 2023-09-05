import React, { useContext } from "react"
import {Fname,Lname} from "./Comp"
function Comp3(){
 const num1 = useContext(Fname)
 const num2 = useContext(Lname)
 return (
 <h1>Multiplication of numbers in component-3: {num1 }{num2}</h1>
 )
}
export default Comp3

