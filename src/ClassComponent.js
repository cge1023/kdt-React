import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
    this.changeNumber = this.changeNumber.bind(this);
  }
  changeNumber(e) {
    console.log(e.target.innerText);
    this.setState({ number: this.state.number + 1 });
  }
  consoleLog(name) {
    console.log(name, "안녕");
  }
  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button
          onClick={(e) => {
            this.changeNumber(e);
          }}
        >
          설정
        </button>
      </>
    );
  }
}

export default ClassComponent;
