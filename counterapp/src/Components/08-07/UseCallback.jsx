import React, { useCallback, useState } from 'react';
import Todos from './Todos';

const UseCallback = () => {
    const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
    const [counter, setCounter] = useState(0);

    const addTodo = useCallback(() => {
        setTodos([...todos, "Todo next"])
    }, [todos])

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
        </div>
    )
}

export default UseCallback