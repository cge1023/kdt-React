import { Component } from "react";

class ClassComponent extends Component {
  static defaultProps = {};
  static propTypes = {};
  render() {
    let { title, children } = this.props; // 객체 구조 분해 할당
    return (
      <>
        <div>안녕?</div>
        <div>클래스형 컴포넌트</div>
        <div>{title}</div>
        <div>{children}</div>
      </>
    );
  }
}

export default ClassComponent;
