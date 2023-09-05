import React from 'react';
 
function Map1() {
    let arr = [2, 4, 6, 3, 10, 12]
    return (
    <div>
        <h1>Multiplication of numbers are as under: </h1>
        { 
            arr.map((value,index,arr)=>
            {
                // return <h2>{value} * 5 = {value * 5}</h2>
                return <h2>{value}   :   {value * index} : {arr}</h2>

            })
            }
    </div>
    ) }
export default Map1



