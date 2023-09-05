import React from 'react'
const Arraymap = () => {
 //const arr=["ads","bds","cs","d","e"];
 const arr1=[1,2,3,4,5,6,7,8,9]
 return (
 <div>
 <h1>using arraymap function</h1>
 { arr1.map((item)=>
 {
var arr1= <h1>array values= {item}</h1>
 return arr1
 })
 }

{/* {
    arr1.map((item)=>{
        if(item<6){
            var arr1= <h1>array values= {item}</h1>
            return arr1 
        }
    })
} */}
 </div>
 ) 
}
export default Arraymap
