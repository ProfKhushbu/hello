import React, { useReducer} from "react";

function Usereducer(){
    const[state,dispatch] = useReducer(reducer,0);
    function reducer(state,action){
        if(action.type==='increment'){
            return state+1;
        }
        if(action.type==='decrement'){
            return state-1;
        }
    }
return(
    <>
        <h1>{state}</h1>
        <button onClick={()=> dispatch({type:"increment"})}> Increment </button>
        <button onClick={()=> dispatch({type:"decrement"})}> Decrement </button>
    </>
    ) }
export default Usereducer
