import React from 'react'
import img1 from "./o1.jpg";
import img2 from "./o2.jpg";
import img3 from "./o3.jpg";
const Arrayofimage = () => {
const imag= [ {id:1,pic:img1},{id:2,pic:img2},{id:3,pic:img3} ]
 return (
 <div>
 {imag.map((val)=>{
 return <img src={val.pic} height="200px" width="200px" style={{border:"1px solid red"}}/>
 })
 }
 </div>
 )
}
export default Arrayofimage