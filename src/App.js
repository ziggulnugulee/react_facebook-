import React, { Component } from "react";
import FeedContainer from "./Components/FeedContainer";
import FeedItem from "./Components/FeedItem";
import VideoTalkprofiles from "./Components/VideoTalkprofiles";
import VideoTalkprofilesIMG from "./Components/VideoTalkprofileIMG";
import StoryItem from "./Components/StoryItem";
import PostingLivecastbt from "./Components/PostingLivecastbt";
import PostingMoodbt from "./Components/PostingMoodbt";
import PostingPhotobt from "./Components/PostingPhotobt";
import MyButton from "./Components/MyButton";
import MyPosting from "./Components/MyPosting";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="headerLeft">
            <div id="headerLogoimg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                id="logoImg"
              />
            </div>
            <input type="text" placeholder="검색" id="headerSearchimg" />
          </div>
          <div id="headerCenter">
            <div id="headerCentericons">
              <img
                src="./img/header-center/home.png"
                className="header-center-icon"
                id="icon-home"
              />
            </div>
            <div className="headerCentericons">
              <img
                src="./img/header-center/page.png"
                className="header-center-icon"
                id="icon-page"
              />
            </div>
            <div className="headerCentericons">
              <img
                src="./img/header-center/watch.png"
                className="header-center-icon"
                id="icon-watch"
              />
            </div>
            <div className="headerCentericons">
              <img
                src="./img/header-center/group.png"
                className="header-center-icon"
                id="icon-group"
              />
            </div>
          </div>
          <div id="headerRight">
            <div id="headerRighticons">
              <img
                src="./img/header-right/create-icon.png"
                className="header-right-icon"
                id="create"
              />
            </div>
            <div className="headerRighticons">
              <img
                src="./img/header-right/messenger-icon.png"
                className="header-right-icon"
                id="messenger"
              />
            </div>
            <div className="headerRighticons">
              <img
                src="./img/header-right/notification-icon.png"
                className="header-right-icon"
                id="notification"
              />
            </div>
            <div className="headerRighticons">
              <img
                src="./img/header-right/account-icon.png"
                className="header-right-icon"
                id="account"
              />
            </div>
          </div>
        </div>

        <div className="boxContainer">
          <div id="box-container-left">
            <ul>
              <li className="left-items">사진/정예진</li>
              <li className="left-items">코로나19 정보 센터</li>
              <li className="left-items">친구</li>
              <li className="left-items">메신저</li>
              <li className="left-items">페이지</li>
              <li className="left-items">더보기</li>
            </ul>
          </div>
          <div className="boxContainermain">
            <div id="storyContainer">
              <StoryItem></StoryItem>
              <StoryItem></StoryItem>
              <StoryItem></StoryItem>
              <StoryItem></StoryItem>
            </div>
            <div id="myPosting">
              <div id="writePosting">
                <div id="postingProfile"></div>
                <MyPosting></MyPosting>
              </div>
              <div id="postingButtons">
                <PostingLivecastbt />
                {/* </div> */}
                <PostingPhotobt />
                <PostingMoodbt />
              </div>
            </div>
            <div id="videoTalk">
              <div id="videoTalkTitle">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4Rd0PQhwyHd.png"
                  id="videoTalkimg"
                />
                <div id="videoTalktxt">영상톡모임/만들기</div>
              </div>
              <VideoTalkprofiles>
                <VideoTalkprofilesIMG />
              </VideoTalkprofiles>
            </div>

            {/* <FeedContainer> */}
            <FeedItem name="오종택" time="2시간" />
            <FeedItem name="이수종" time="4시간" />
            <FeedItem name="윤현영" time="5시간" />
            <FeedItem name="정예진" time="7시간" />
            {/* </FeedContainer> */}
            <MyButton></MyButton>
          </div>
          <div id="box-container-right">
            <div className="right-items">
              <p>Sponsored</p>

              <ul>
                <li>스폰서1</li>
                <li>스폰서2</li>
                <li>스폰서3</li>
              </ul>
            </div>
            <div className="right-items">
              <p>예진님의 페이지</p>

              <ul>
                <li>페이지1</li>
                <li>페이지2</li>
                <li>페이지3</li>
              </ul>
            </div>
            <div className="right-items">
              <p>연락처</p>
              <ul>
                <li>연락처1</li>
                <li>연락처2</li>
                <li>연락처3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
