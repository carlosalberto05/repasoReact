import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Desde el counter</h1>
      <button onClick={increment}>+</button>
      <span style={{ margin: "20px" }}>{counter}</span>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Counter;
