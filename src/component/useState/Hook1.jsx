import React, { useState } from "react";

const Hook1 = () => {
  const initialValue = 0;
  const [num, setNum] = useState(initialValue);

  const handleReset = () => {
    setNum(0);
  };
  const handleIncrement = () => {
    setNum((preValue) => preValue + 1);
  };
  const handleDecrement = () => {
    setNum((preValue) => preValue - 1);
  };
  return (
    <div>
      {num}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment number</button>
      <button onClick={handleDecrement}>Decrement number</button>
    </div>
  );
};

export default Hook1;
