import React from 'react'
function Ex3() {
 function handleClick(event) {
 console.log ('"University_name"="LJU"');
 }
 return (
 <button value={University_name} onClick={handleClick} />
 ) }
export default Ex3;
