// import React from 'react'
// const Filter = () => {
//  const arr=[9,10,23,30,87,3];
//  const newarr=arr.filter((num)=> {
//  if(num<10)
//  {return false}
//  else
//  return true 
//  } )
//  return (
//  <div>
//  <h1>Array before filter {arr.join(",")}</h1>
//  <h1>Array after filter {newarr.join(",")}</h1>
//  </div>
//  ) }
// export default Filter

// import React from 'react'
// const Filter = () => {
//  const arr=[9,10,23,30,87,3];
//  //arr.filter(num => num % 2 === 0)
//  const newarr=
//  arr.filter(num => num % 2 === 0)
//  return (
//  <div>
//  <h1>Array before filter {arr.join(",")}</h1>
//  <h1>Array after filter {newarr.join(",")}</h1>
//  </div>
//  ) }
// export default Filter

import React from 'react'
function Filter () {
const age = [70,83,38,65,49,94]
const newarr=age.filter((num)=> {
            if(num<60)
                {return false}
            else
                return true 
                } )
return (
<div>
    <h1>Array after filter {newarr.join(",")}</h1>
    <h1>Total Persons fulfilling the criteria {newarr.length}</h1>
</div>
) }
export default Filter
