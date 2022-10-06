function Test() {
  let name = "최고은";
  let my_style = {
    backgroundColor: "blue",
    color: "orange",
    fontSize: "40px",
    padding: "12px",
  };
  return (
    <>
      <div style={my_style}>{name}</div>
    </>
  );
}

export default Test;
