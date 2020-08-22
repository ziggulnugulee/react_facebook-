import React, { Component } from "react";

class MyPosting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyPostInput: "",
      MyPostContent: "",
    };
  }

  postChange = (e) => {
    this.setState({
      MyPostInput: e.target.value,
    });
  };

  showPost = () => {
    this.setState({
      MyPostContent: this.state.MyPostInput,
    });
  };
  enterpress = (e) => {
    if (e.key === "Enter") {
      this.showPost();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="너구리님, 무슨 생각을 하고 계신가요?"
          onChange={this.postChange}
          onKeyPress={this.enterpresss}
        ></input>
        <p>{this.state.MyPostContent}</p>
      </div>
    );
  }
}
// class ShowMyPost extends Component {
//   render() {
//     return (
//       <div>
//         <p>{Myposting.state.MyPostContent}</p>
//       </div>
//     );
//   }
// }
// 포스팅 등록후 보여주는 영역을 새로운 클래스로
// 만들어서 안에서 MyPosting 클래스의 state를 사용하려고
//했는데 실패함

export default MyPosting;
