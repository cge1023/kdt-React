import { Component } from "react";

class ClassComponent extends Component {
  state = {
    number: 0,
    text: "안녕",
  };
  render() {
    let { number, text } = this.state;
    return (
      <>
        <div>
          <h3>Number : {number}</h3>
        </div>
        <button
          onClick={() => {
            this.setState((prev) => ({ number: prev.number + 1 }));
          }}
        >
          설정
        </button>
      </>
    );
  }
}

export default ClassComponent;
