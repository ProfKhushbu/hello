import React, {useState} from 'react';
function App1() {
const [name , setName] = useState('');
const [age , setAge] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [confPassword , setConfPassword] = useState('');
const handleChange =(e)=>{
setName(e.target.value);
}
const handleAgeChange =(e)=>{
setAge(e.target.value);
}
const handleEmailChange =(e)=>{
setEmail(e.target.value);
}
const handlePasswordChange =(e)=>{
setPassword(e.target.value);
}
const handleConfPasswordChange =(e)=>{
setConfPassword(e.target.value);
}
const handleSubmit=(e)=>{
if(password!=confPassword){ 
    alert("password Not Match");
    }
else{
alert('A form was submitted with Name : ' +name+' Age : '+age +' and Email : ' + email)}    e.preventDefault();
}
return (
<div >
   <form onSubmit={(e) => {handleSubmit(e)}}>
    <h3> Sign-up Form </h3>
    <input type="text" value={name} required onChange={(e)=> {handleChange(e)}}/> Name <br/>
    <input type="text" value={age} required onChange={(e)=> {handleAgeChange(e)}} /> Age<br/>
    <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /> Email<br/>
    <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} />Password<br/>
    <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} />Confirm Password<br/>
    <input type="submit" value="Submit"/>
   </form>
</div>
) } 
export default App1;
