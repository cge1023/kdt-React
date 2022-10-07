import React, { useState } from "react";

const Test9 = () => {
  let [style, setStyle] = useState({});
  const disappear = () => {
    setStyle({ display: "none" });
  };
  return (
    <>
      <button onClick={disappear}>사라져라</button>
      <h1 style={style}>안녕하세요</h1>
    </>
  );
};

export default Test9;
