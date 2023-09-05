import React ,{ useState} from 'react'
const Formapplication = () => 
{
 	const[email,setEmail]= useState("");
 	const[pass,setPass]= useState("");
    const handleEmailchange=((e)=>{
 		setEmail(e.target.value); 
            });
    const handlePasswordchange=((e)=>{
 		setPass(e.target.value); 
 	        });
 	const handleSubmit=((e)=>{
 		e.preventDefault();
           const regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 	       const regexPass=/^[A-Za-z]\w{8,}$/;
 	        if(!regexEmail.test(email))
 		        { alert("enter valid email address");}
 	        if(!regexPass.test(pass))
 		        { 
                alert("Password must have 8 characters which contain only characters, numeric digits, underscore and first character must be a letter");}
 	        setEmail("");
 	        setPass("");
            } );
 
return ( 
 	<form onSubmit={handleSubmit}>
 	    <label>E-Mail:
 	    <input type="email" value={email} onChange={handleEmailchange}/>
        </label> <br/>
 	    <label>Password:
        <input type="password"value={pass} onChange={handlePasswordchange}/>
 	    </label> <br/>
 	    <button type="submit">submit</button>
 	</form>
 ) }
export default Formapplication
