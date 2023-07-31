import { useState, useEffect, useRef } from "react";

function RefRender() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    const renderCount = useRef(0)

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h3>Render count - {renderCount.current}</h3>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h4>Current Value: {inputValue}</h4>
            <h4>Previous Value: {previousInputValue.current}</h4>
        </div>
    );
}

export default RefRender