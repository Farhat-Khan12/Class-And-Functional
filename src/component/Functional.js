import React ,{useState} from "react";
 
const FunctionalComponent=()=>{
    const[count , setCount]=useState(0);
    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            setCount(count);
        }
    }
 
    return(
        <div style={{margin:'50px'}}>
            <h1>FUNCTIONAL COMPONENT</h1>
            <h3>Counter App using Functional Component : </h3>
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
            <br/>
            <button onClick={decrease}>Substract</button>

        </div>
    )
}
export default FunctionalComponent;