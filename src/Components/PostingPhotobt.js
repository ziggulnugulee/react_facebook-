import React, { Component } from "react";

class PostingPhotobt extends Component {
  render() {
    return (
      <div>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
          className="postingbutton-img"
          id="livecast-img"
        ></img>
        <button id="postingPhotocast" type="button" href="#">
          사진/동영상
        </button>
      </div>
    );
  }
}

export default PostingPhotobt;
