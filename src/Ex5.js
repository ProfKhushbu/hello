import React, { useState } from 'react';
import img1 from "./o1.jpg";
import img2 from "./o2.jpg";
import img3 from "./o3.jpg";
import img4 from "./o4.jpg";
const US2 = () => {
//   const arr=[img1,img2,img3,img4]
//   var index=0
//     const [myImage,setImage]=useState(arr[index]);
// function changeImage(){
//     if(index<3){
//       index++
//       setImage(arr[index])
//     } 
//   }

//To flip image
const [myImage,setImage]=useState(img1);
    const changeImage = () => {
        if(myImage === img1){
            setImage(img2)
        }else{
            setImage(img1)
        }
    }

    return (
        <div>
            <img src={myImage} heigth="200px" width="200px" alt="logo" />
            <button onClick={changeImage}>Change Image</button>
        </div>
        ) }
export default US2
