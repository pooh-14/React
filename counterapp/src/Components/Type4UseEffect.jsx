import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Type4UseEffect() {
    const [counter1, setCounter1] = useState(10);
    const [counter2, setCounter2] = useState(20);
    const [counter3, setCounter3] = useState(30);
    
    const router = useNavigate();

    useEffect(() => {
        console.log("Inside effect")
        if (counter1 === 12) {
            router('/wel')
        }
    }, [counter1, counter2,router]);

    return(
        <div>
            <h1>Type4UseEffect</h1>
            <h2>Counter1:{counter1}</h2>
            <button onClick={()=>setCounter1((num)=>num+1)}>+1 for Counter1</button>
            <h2>Counter2:{counter2}</h2>
            <button onClick={()=>setCounter2((num)=>num+1)}>+1 for Counter2</button>
            <h2>Counter3:{counter3}</h2>
            <button onClick={()=>setCounter3((num)=>num+1)}>+1 for Counter3</button>
        </div>
    )
}
export default Type4UseEffect;