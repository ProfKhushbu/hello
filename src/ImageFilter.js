import React, { useState } from 'react';
import img1 from "./o1.jpg"
import img2 from "./o2.jpg"
import img3 from "./o3.jpg"
import img4 from './o4.jpg'
const Gallery = [
    {
        category:"All"
    },
    {
        id:1,
        pic:img1,
        category:"Samsung"
    },
    {
        id:1,
        pic:img2,
        category:"Mi"
    },
    {
        id:1,
        pic:img3,
        category:"Oneplus"
  },
    {
        id:1,
        pic:img4,
        category:"Mi"
    },

];

function Product () {
    const[images,setImage]=useState(Gallery);
    const [categList, setCategList] = useState(Gallery);
    
    const handleproduct=(Item)=>
    {
        const finaldata=Gallery.filter((value)=>
        {
            return value.category===Item;
        });
        if(Item !== "All"){
            setImage(finaldata);
            
        }
        else{
            setImage(Gallery)
            
        }
    }
   
  return (
    <div>
        <button onClick={() =>handleproduct('All')}>All</button>
        <button onClick={() =>handleproduct('Samsung')}>Samsung</button>
        <button onClick={() =>handleproduct('Mi')}>Mi</button>
        <button onClick={() =>handleproduct('Oneplus')}>Oneplus</button>
                             
        <div>
            {
                images.map((val)=>
                {   
                    return(    
                    <>
                        <img src={val.pic} />
                    </> 
                    ) 
                })
            }
            </div> 
    </div>
  )}
export default Product