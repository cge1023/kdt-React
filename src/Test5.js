import { Component } from "react";
import PropTypes from "prop-types";

class Test5 extends Component {
  static defaultProps = {
    text: "이건 기본 text props 입니다",
  };
  static propTypes = {
    text: PropTypes.string,
  };
  render() {
    // 객체 구조 분해 할당
    return (
      <>
        <h1>{this.props.text}</h1>
        <button
          onClick={(props) => {
            console.log(this.props.valid);
          }}
        >
          콘솔 메세지
        </button>
      </>
    );
  }
}

export default Test5;
