import React, { Component } from "react";

class PostingLivecastbt extends Component {
  render() {
    return (
      <div>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
          className="postingbutton-img"
          id="livecast-img"
        ></img>
        <button id="postingLivecast" type="button" href="#">
          {" "}
          라이브방송
        </button>
      </div>
    );
  }
}

export default PostingLivecastbt;
