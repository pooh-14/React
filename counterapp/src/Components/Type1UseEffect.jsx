import { useEffect, useState } from "react";

function Type1UseEffect(){
    const[counter, setcounter] = useState(0);

    useEffect(()=>{
        console.log("Inside Effect")
    })

    function addCounter(){
        setcounter((prevalue) => prevalue + 1)
    }


    return(
        <div>
            <h1>Type1UseEffect</h1>
            <h1>{counter}</h1>
            <button onClick={addCounter}>Add counter</button>
        </div>
    );
}
export default Type1UseEffect;