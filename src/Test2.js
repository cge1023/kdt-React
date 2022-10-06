import Grass from "./grass2.png";

function Test2() {
  let style = {
    color: "orange",
    fontSize: "40px",
    marginTop: "20px",
  };
  return (
    <>
      <div style={style}>
        <h2>안녕하세요</h2>
      </div>
      <div style={style}>
        <img src={Grass} />
      </div>
    </>
  );
}

export default Test2;
