import React, { useState } from "react";

const ExampleComponent = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: isTrue ? "red" : "blue",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        {isTrue ? "TRUE" : "FALSE"}
      </button>
    </div>
  );
};

export default ExampleComponent;
