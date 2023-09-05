import React, { useState } from 'react'
function FormValidation2 (){
 const[formdata,setformdata]=useState({});
 const handlechange = (event) => {
 const name = event.target.name;
 const value = event.target.value;
 setformdata({...formdata, [name]: value})
 }
 const handlesubmit=(e)=> {
    e.preventDefault();
    alert("Your form has been submitted.\nName: " + formdata.fname + "\nEmail: " + formdata.eid + "\nCity: "+ formdata.city +"\nGender: "+formdata.gender) }
 return (
 <div>
 <form onSubmit={handlesubmit}>
  <input type="text" name="fname" onChange={handlechange} />First Name:<br/>
  <input type="email" name="eid" onChange={handlechange} />Email Id:<br/>
  <input type="password" name="pass" onChange={handlechange}/>Password:<br/>
  <textarea name="msg" onChange={handlechange} /> Message :<br/>
  <select onChange={handlechange} name='city'>
      <option value="Ahmedabad">Ahmedabad</option>
      <option value="Gandhinagar">Gandhinagar</option>
  </select>
  <input type="radio" name="gender" value="Male" onChange={handlechange} />Male
  <input type="radio" name="gender" value="Female" onChange={handlechange}/>Female
  <button type="submit">Submit</button> <br/>
 </form>
 </div>
 ) }
export default FormValidation2