import { useState } from 'react';
function MyForm1() 
{ 
    const [txtarea, setTextarea] = useState( );
    const [myCar, setMyCar] = useState("Volvo");
    const [s, setSize] = useState('Medium');
function onOptionChange(e) {
setSize(e.target.value);
};
const [name, setName] = useState("");
const handleChange1 = (event) => {
    setMyCar(event.target.value)
    }
const handleSubmit = (event) => {
    event.Defaultprevent();
    alert(`The name you entered was: ${name} ${myCar} ${s}`)
    }
const handleChange = (event) => {
        setTextarea(event.target.value)
    }
return( 
<form onSubmit={handleSubmit}>
<input type='radio' name='ps' value='Regular' onChange={onOptionChange} />Regular

<input type='radio' name='ps' value='Medium' onChange={onOptionChange} />Medium

<input type='radio' name='ps' value='Large' onChange={onOptionChange} />Large

<select value={myCar} onChange={handleChange1}>
<option value="Ford">Ford</option>
<option value="Volvo">Volvo</option>
<option value="Fiat">Fiat</option>
</select>
<textarea value={txtarea} onChange={handleChange} />
<label>Enter your name: 
<input type="text"value={name} onChange={(e) => setName(e.target.value)} /> </label> 
<input type="submit" />
</form> 
) } 
export default MyForm1