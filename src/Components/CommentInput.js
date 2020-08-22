import React, { Component } from "react";

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentContent: "",
      newComment: "",
    };
  }

  commentChange = (e) => {
    this.setState({
      commentContent: e.target.value,
    });
  };
  showContent = () => {
    this.setState({
      newComment: this.state.commentContent,
    });
  };
  enterPress = (e) => {
    if (e.key === "Enter") {
      this.showContent();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          onChange={this.commentChange}
          onKeyPress={this.enterPress}
        />

        {<p>{this.state.newComment}</p>}
      </div>
    );
  }
}

export default CommentInput;
