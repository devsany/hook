import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect- render");
  }, []);
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Clicked {counter} times
        </button>
      </div>
    </div>
  );
};

export default UseEffect1;
