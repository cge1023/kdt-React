import React, { useState } from "react";

const FunctionComponent = (props) => {
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1);
  };
  const subNumber = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={addNumber}>+</button>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        뿔러스
      </button>
      <button onClick={subNumber}>-</button>
    </>
  );
};

export default FunctionComponent;
