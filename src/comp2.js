import React from "react"
import Comp3 from "./comp3"

function Comp2(){
    return (
            <Comp3/>
    )
}
export default Comp2

// import React, { useContext } from "react"
// import { Info } from "./Comp"
// function Comp2(){
//     var Info = useContext(Info)
//     return (
//         <div>
//         { 
//         Info.map((value)=>
//         {
//         return <h2>{value}</h2>
//         })
//         }
//         </div>)
//     }
// export default Comp2
