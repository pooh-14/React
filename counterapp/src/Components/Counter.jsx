import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter((prevValue) => prevValue + 1);
  }
  function sub() {
    setCounter((prevValue) => prevValue - 1);
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={add}> + Add by 1 </button>
      <button onClick={sub}> - Sub by 1 </button>
    </div>
  );
}
export default Counter;
