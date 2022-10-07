import { Component } from "react";

class Handler_ex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello World!",
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <button
          onClick={() => {
            this.setState({ text: "Goodbye World!" });
          }}
        >
          클릭
        </button>
      </>
    );
  }
}

export default Handler_ex;
