import React, {useEffect, useState} from 'react'
import axios from "axios"
const RandomJoke = () => {
const [joke,setJoke] = useState("");
// useEffect(() => {
//     fetchJoke()
// }) 
// //to auto fetch joke
const fetchJoke =() =>{
    axios
    .get("https://official-joke-api.appspot.com/random_joke")
    .catch((error)=>{
        console.error(error);
        })
    .then((response) => {
        const{setup,punchline}=response.data;
        setJoke(`${setup} ${punchline}`);
        })
    
    //.get("https://dog.ceo/api/breeds/image/random")
    
    // .then((response)=>{
    //     const{message}=response.data;
    //     setJoke(`${message}`)
    // })
  
    };
return (
    <div>
        <h1>Random Joke Generator</h1>
         <p>{joke}</p>
        <button onClick={fetchJoke}>Get Another Joke</button>    
    </div>
  ) }
export default RandomJoke
