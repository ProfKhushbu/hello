import React from 'react';
import { useState } from 'react';
function Myform() {
 	const [size, setsize] = useState('Medium');
 	const onOptionChange = e => {
            setsize(e.target.value);
 		};
 return (
 	<div>
 		<h3>Select Pizza Size</h3>
 	<form>
            <input type='radio' name='size' value='Regular' onChange={onOptionChange} />Regular
 	        <input type='radio' name='size' value='Medium' onChange={onOptionChange} />Medium
            <input type='radio' name='size' value='Large' onChange={onOptionChange} />Large
 	</form>
    <p>
 	    Selected size <strong>{size}</strong>
    </p>
 </div>
 ) }
export default Myform
