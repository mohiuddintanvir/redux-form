import React, { useReducer } from 'react';

const Counter = () => {
    const initialstate=0;
    const reducer=(state,action)=>{
        console.log(action)
if(action.type=== "INCREASE"){
    return state+action.payload.count
}
else if(action.type==="DECREASE"){
    return state-1
}
    }
    const [state,dispatch]=useReducer(reducer,initialstate)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:"INCREASE",payload:{count:5}})}>Increase</button>
            <button>Decrease</button>
        </div>
    );
};

export default Counter;