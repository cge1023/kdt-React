import React, { useState } from "react";

const Event_ex = () => {
  let [list, setList] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  function addList() {
    let newList = list.concat({ name: name, email: email });
    setList(newList);
    setName("");
    setEmail("");
  }

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={email}
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            addList();
          }
        }}
      ></input>
      <button onClick={addList}>등록</button>
      {list.map((value, id) => {
        return (
          <div
            key={value.email}
            onDoubleClick={(e) => {
              let newList = list.filter((value2) => {
                return value2.email !== value.email;
              });
              console.log(newList);
              setList(newList);
            }}
          >
            {value.name} : {value.email}
          </div>
        );
      })}
    </>
  );
};

export default Event_ex;
