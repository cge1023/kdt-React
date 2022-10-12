import React, { Component } from "react";

class RefTest extends Component {
  constructor(props) {
    super(props);
    this.box2 = React.createRef();
  }

  aaa = () => {
    console.log(this.box);
    console.log(this.box2.current);

    this.input.focus();
    this.input.value = "";
  };

  render() {
    return (
      <>
        <div
          ref={(ref) => {
            this.box = ref;
          }}
        >
          box
        </div>
        <div ref={this.box2}>box2</div>
        <div id="box"></div>
        <input></input>
        <button onClick={this.aaa}>버튼</button>
      </>
    );
  }
}

export default RefTest;
