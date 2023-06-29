import { useEffect, useState } from "react";

function Type3UseEffect(){
    const[counter,setCounter]=useState(0)
    const[counter1,setCounter1]=useState(10)
    useEffect(()=>{
        console.log("Inside Type 3")
    },[counter])

    return(
        <div>
            <h1>Type3UseEffect</h1>
            <h2>Counter:{counter}</h2>
            <button onClick={()=>setCounter((num)=>num+1)}>+1</button>
            <h2>Counter1:{counter1}</h2>
            <button onClick={()=>setCounter1((num)=>num+1)}>+1</button>
        </div>
    )
}
export default Type3UseEffect;