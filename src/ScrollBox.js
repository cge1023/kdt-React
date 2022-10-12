import { Component } from "react";

class ScrollBox extends Component {
  moveBottom = () => {
    this.div1.scrollTop = this.div1.scrollHeight;
  };
  render() {
    return (
      <>
        <div
          ref={(ref) => {
            this.div1 = ref;
          }}
          style={{ width: "200px", height: "200px", overflowY: "scroll" }}
        >
          <div
            ref={(ref) => {
              this.div2 = ref;
            }}
            style={{
              width: "100%",
              backgroundColor: "pink",
              height: "1000px",
            }}
          ></div>
        </div>

        <button onClick={this.moveBottom}>맨밑으로</button>
      </>
    );
  }
}

export default ScrollBox;
