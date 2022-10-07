import React, { useState } from "react";

const Test8 = () => {
  let [color, setColor] = useState("검정색");
  let [style, setStyle] = useState({});

  const changeColor = (e) => {
    if (e.target.innerText == "빨간색") {
      setColor("빨간색");
      setStyle({ color: "red" });
    } else if (e.target.innerText == "파란색") {
      setColor("파란색");
      setStyle({ color: "blue" });
    }
  };
  return (
    <>
      <h1>
        <span style={style}>{color}글씨</span>
      </h1>
      <button
        onClick={(e) => {
          changeColor(e);
        }}
      >
        빨간색
      </button>
      <button
        onClick={(e) => {
          changeColor(e);
        }}
      >
        파란색
      </button>
    </>
  );
};

export default Test8;
