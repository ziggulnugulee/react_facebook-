import React, { Component } from "react";

class PostingMoodbt extends Component {
  render() {
    return (
      <div>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
          className="postingbutton-img"
          id="mood-img"
        ></img>
        <button id="postingMood" type="button" href="#">
          기분
        </button>
      </div>
    );
  }
}

export default PostingMoodbt;
