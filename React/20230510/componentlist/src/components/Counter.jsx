import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
      // setCount(count + 1);
      setCount(prevCount => prevCount + 1)
    };
    
    function handleDecrement() {
      // setCount(count - 1);
      setCount(prevCount => prevCount - 1)
    };

  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  )
}
