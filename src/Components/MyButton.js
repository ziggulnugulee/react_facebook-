import React, { Component } from "react";

class MyButton extends Component {
  /*버튼으로 state를 변경해보자*/
  constructor(props) {
    super(props);
    this.state = {
      clickplus: 0,
      clickminus: 15,
    };
  }
  /*setState를 이용해 clickplus state를 늘려주는 함수를 만든다*/
  clickChange = () => {
    this.setState({
      clickplus: this.state.clickplus + 1,
    });
  };

  /*onllick 어트리뷰트에 clickchange 함수를 이벤트로 적용한다*/
  render() {
    return (
      <button onClick={this.clickChange}>
        <p>{this.state.clickplus}</p>
        state를 변경해보자
        {console.log(this.state.clickplus)}
      </button>
    );
  }
}

export default MyButton;
