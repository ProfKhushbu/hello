import React from 'react'
function Filter (){
const Prices=[70,83,38,65,49,94];
const newarr=Prices.filter((num)=> {
            if(num<60)
                {return false}
            else
                return true 
                } )
return (
<div>
    <h1>Array after filter {newarr.join(",")}</h1>
    <h1>Count of Prices fullfilling the criteria  {newarr.length}</h1>
</div>
) }
export default Filter

// Filter data and count the number of items that meet specific criteria.