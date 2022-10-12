import React, { useState } from "react";
import "./App.css";

const Test10 = () => {
  let [writer, setWriter] = useState("");
  let [title, setTitle] = useState("");
  let [list, setList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [id, setId] = useState(1);
  let [option, setOption] = useState("");
  let [keyword, setKeyword] = useState("");

  function addList() {
    let newList = list.concat({
      id: id,
      writer: writer,
      title: title,
    });
    setId(id + 1);
    setList(newList);
    setWriter("");
    setTitle("");
  }
  function search() {
    let newList;
    if (option == "title") {
      newList = list.filter((value) => {
        return value.title.includes(keyword);
      });
    } else if (option == "writer") {
      newList = list.filter((value) => {
        return value.writer.includes(keyword);
      });
    }
    setFilteredList(newList);
  }
  return (
    <>
      <div className="headDiv">
        작성자 :{" "}
        <input
          type="text"
          value={writer}
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        ></input>
        제목 :{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button onClick={addList}>작성</button>
      </div>
      <div className="searchArea">
        <select
          onChange={(e) => {
            if (e.target.value == "writer") {
              setOption("writer");
            } else {
              setOption("title");
            }
          }}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        ></input>
        <button onClick={search}>검색</button>
      </div>
      <div>
        <table
          border="1"
          cellSpacing="0"
          cellPadding="10"
          width="100%"
          style={{ textAlign: "center" }}
        >
          <tbody>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
            {list.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>검색 결과</div>
      <div>
        <table
          border="1"
          cellSpacing="0"
          cellPadding="10"
          width="100%"
          style={{ textAlign: "center" }}
        >
          <tbody>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
            {filteredList.map((value, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test10;
