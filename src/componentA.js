import React, { useState } from "react";
import './componentA.css';

const ComponentA = () => {
  const [value, setValue] = useState(2);

  const handleIncrement = () => {
    setValue(value + 10);
  };

  return <ComponentB value={value} onIncrement={handleIncrement} />;
};

const ComponentB = ({ value, onIncrement }) => {
  return (
    <div className="counter">
      <p>Value: {value}</p>
      <button onClick={onIncrement}>Increment by 10</button>
    </div>
  );
};

export default ComponentA;
