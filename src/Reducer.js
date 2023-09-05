import React, { useReducer} from "react";
function Usereducer(){
    const[state,dispatch] = useReducer(reducer,"Hello");
    function reducer(state,action){

        if(action.type==='Uppercase'){
            return state.toUpperCase();
        }
        if(action.type==='Lowercase'){
            return state.toLowerCase()
        }
    }
return(
    <>
        <h1>{state}</h1>
        <button onClick={()=> dispatch({type:"Uppercase"})}> Uppercase </button>
        <button onClick={()=> dispatch({type:"Lowercase"})}> Lowercase </button>
    </>
    ) }
export default Usereducer
