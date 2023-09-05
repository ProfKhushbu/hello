import React from 'react'
import './App.css';
import i1 from "./o1.jpg" //(File in image folder in src folder ../)
import i2 from "./o2.jpg"
import i3 from "./o3.jpg"
import Task from './Task';

function Product() {
  return (
    <div>
      <div className="App">
 
 <div class="myclass">
   <Task name="Mobile" img1={i1} price="50000Rs" disc="Hello Mi note 11"/>
 </div>
 <div class="myclass">
   <Task name="Mobile" img1={i2} price="25000Rs" disc="Hello Mi note 12"/>
 </div>
 <div class="myclass">
   <Task name="Mobile" img1={i3} price="10000Rs" disc="Hello Mi note 12"/>
 </div>

       </div>
  </div>
  )}

export default Product
