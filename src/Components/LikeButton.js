import React, { Component } from "react";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
    };
  }

  likeCount = () => {
    this.setState({
      Count: this.state.Count + 1,
    });
  };
  render() {
    return (
      <button onClick={this.likeCount}>
        좋아요
        <p>{this.state.Count}</p>
      </button>
    );
  }
}

export default LikeButton;
