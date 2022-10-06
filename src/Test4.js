import "./App.css";
import Cover from "./cover.jpeg";

function Test4(props) {
  return (
    <>
      <div className="wrap">
        <h1>이번주 베스트셀러</h1>
        <img src={Cover} />
        <h2>{props.title}</h2>
        <div>저자 : {props.author}</div>
        <div>판매가 : {props.price}</div>
        <div>구분 : {props.type}</div>
      </div>
    </>
  );
}

export default Test4;
