import React, { useRef, useState } from 'react';


function RefFocus() {

    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <input ref={inputRef} type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
            <p>{inputValue}</p>
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}

export default RefFocus