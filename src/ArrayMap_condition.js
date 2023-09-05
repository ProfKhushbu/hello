import React from 'react'
const ArrayMap_condition = () => {
 const arr1=[1,2,3,4,5,6,7,8,9]
 return (
 <div>
 <h1>using arraymap function</h1>
{
    arr1.map((item)=>{
        if(item<6){
            var arr1= <h1>array values= {item}</h1>
            return arr1 
        }
    })
}
 </div>
 ) 
}
export default ArrayMap_condition