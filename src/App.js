import React, {Component} from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <div>Hi 0731</div>
    )
  }
}
class headerCentericons extends Component{
  render(){
    return(
      <div></div>
    )
  }
}
class headerRighticon extends Component{
  render(){
    return(
      <div></div>
    )
  }
}
class boxContainer extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class boxContainerMain extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class storyItem extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class postingButton extends Component{
  render(){
    return(
      <div></div>
    )
  }
}


class feedItem extends Component{
  render(){
    return(
      <div></div>
    )
  }
}


class feedHeader extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedProfile extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedTitle extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedTitlename extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedTitletime extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedContent extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedLike extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedLikecounts extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedButtons extends Component{
  render(){
    return(
      <div></div>
    )
  }
}
class feedLikebutton extends Component{
  render(){
    return(
      <div>좋아요</div>
    )
  }
}
class feedCommentbutton extends Component{
  render(){
    return(
      <div>댓글달기</div>
    )
  }
}
class feedSharebutton extends Component{
  render(){
    return(
      <div>공유하기</div>
    )
  }
}
class feedCommentshow extends Component{
  render(){
    return(
      <div></div>
    )
  }
}
class feedCommentprofile extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

class feedCommentcontent extends Component{
  render(){
    return(
      <input type="text"></input>
    )
  }
}

class sideSectxt extends Component{
  render(){
    return(
      <div>좌우내브바</div>
    )
  }
}




class App extends Component{
  render(){
    return(
      <div className="App">
        <body>
    <div id="header">
        <div id="headerLeft">
            <div id="headerLogoimg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" id="logoImg"></img>
            </div>
            <input type="text" value="검색" id="headerSearchimg"> </input>
        </div>
        <div id="headerCenter">
            <div id="headerCentericons">
            <img src="./img/header-center/home.png" className="header-center-icon" id="icon-home">
            </img>
            </div>
            <div className="headerCentericons">
            <img src="./img/header-center/page.png" className="header-center-icon" id="icon-page"> 
            </img>
            </div>
            <div className="headerCentericons">
            <img src="./img/header-center/watch.png" className="header-center-icon" id="icon-watch"> 
            </img>
            </div>
            <div className="headerCentericons">
                <img src="./img/header-center/group.png" className="header-center-icon" id="icon-group"> 
                </img>
            </div>
        </div>
        <div id="headerRight">
            <div id="headerRighticons">
                <img src="./img/header-right/create-icon.png" className="header-right-icon" id="create">
                </img>
            </div>
            <div className="headerRighticons">
                <img src="./img/header-right/messenger-icon.png" className="header-right-icon" id="messenger">
                </img>
            </div>
            <div className="headerRighticons">
                <img src="./img/header-right/notification-icon.png" className="header-right-icon"id="notification">
                </img>
            </div>
            <div className="headerRighticons">
                <img src="./img/header-right/account-icon.png" className="header-right-icon" id="account">
                </img>
            </div>
        </div>
    </div>
    <div className="box_container">
        <div id="box-container-left">
            <div className="left-items">사진/정예진</div>
            <div className="left-items">코로나19 정보 센터</div>
            <div className="left-items">친구</div>
            <div className="left-items">메신저</div>
            <div className="left-items">페이지</div>
            <div className="side-sec-txt" id="shortcut">바로가기</div>
        </div>
        
        <div className="box-container-main">
            <div id="storyContainer">               
                <div className="story-item">스토리1</div>
                <div className="story-item">스토리2</div>
                <div className="story-item">스토리3</div>
                <div className="story-item">스토리4</div>
            </div>
            <div id="myPosting">   
                <div id="writePosting">
                    <div id="postingProfile"></div>
                    <input type="text" value="너구리님, 무슨 생각을 하고 계신가요?" id="postingInput"></input>
                </div>
                <div id="postingButtons">
                    <div className="postingButton" id="postingLivecast">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png" className="postingbutton-img" id="livecast-img"></img>
                        <button id="postingLivecast" type="button" href="#"> 라이브방송</button>
                    </div>
                    <div className="postingButton" id="postingPhoto">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" className="postingbutton-img" id="photo-img"></img>
                        <button id="postingPhoto" type="button"> 사진/동영상</button>
                    </div>
                    <div className="postingButton" id="postingMood">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/PtKxgr8XgD8.png" className="postingbutton-img" id="mood-img"></img>
                        <button id="postingMood" type="button">기분/활동</button>
                    </div>           
                </div>
            </div>
            <div id="videoTalk">
                <div id="videoTalkTitle">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4Rd0PQhwyHd.png" id="videoTalkimg"></img>
                    <div id="videoTalktxt">영상톡모임/만들기</div>
                </div>
                <div id="videoTalkProfiles">
                    <div className="videoTalkProfileIMG"></div>
                    <div className="videoTalkProfileIMG"></div>
                    <div className="videoTalkProfileIMG"></div>

                </div>
            </div>
            
            <div id="feedContainer">
                <div className="feed-item">
                    <div className="feedHeader">
                        <div className="feedProfile"></div>
                        <div className="feedTitle">
                            <div className="feedTitlename">정예진</div>
                            <div className="feedTitletime">6시간</div>
                        </div>
                    </div>
                    <div className="feedContent">안녕 여러분 여기가 페이스북이구나랄라랄
                        <div className="feedContentphoto">사진</div>
                    </div>
                    <div className="feedLike">
                        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" className="feedLikeimg"></img>
                        <span className="feedLikecounts"></span>    
                    </div>
                        <div className="feedButtons">
                        <button className="feedLikebutton">좋아요</button>
                        <button className="feedCommentbutton">댓글달기</button>
                        <button className="feedSharebutton">공유하기</button>
                    </div>
                    
                    <div className='feedCommentshow'>
                        <div className='feedCommentprofile'></div>
                        <input type="text" className='feedCommentcontent'></input>
                    </div>
                    </div>
                </div>
                <div className="feed-item">
                    <div className="feedHeader">
                        <div className="feedProfile"></div>
                        <div className="feedTitle">
                            <div className="feedTitlename">오종택</div>
                            <div className="feedTitletime">6시간</div>
                        </div>
                    </div>
                    <div className="feedContent">안녕 여러분 여기가 페이스북이구나랄라랄</div>
                    <div className="feedLike">
                        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" className="feedLikeimg"></img>
                        <span className="feedLikecounts"></span> 
                    </div>
                    <div className="feedButtons">
                        <button className="feedLikebutton">좋아요</button>
                        <button className="feedCommentbutton">댓글달기</button>
                        <button className="feedSharebutton">공유하기</button>
                    </div>
                   
                    <div className='feedCommentshow'>
                        <div className='feedCommentprofile'></div>
                        <input type="text" className='feedCommentcontent'></input>
                    </div>
                    </div>
                </div>
                <div className="feed-item">
                    <div className="feedHeader">
                        <div className="feedProfile"></div>
                        <div className="feedTitle">
                            <div className="feedTitlename">윤현영</div>
                            <div className="feedTitletime">6시간</div>
                        </div>
                    </div>
                    <div className="feedContent">안녕 여러분 여기가 페이스북이구나랄라랄</div>
                    <div className="feedLike">
                        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" className="feedLikeimg"></img>
                        <span className="feedLikecounts"></span> 
                    </div>
                    <div className="feedButtons">
                        <button className="feedLikebutton">좋아요</button>
                        <button className="feedCommentbutton">댓글달기</button>
                        <button className="feedSharebutton">공유하기</button>
                    </div>
                    
                    <div className='feedCommentshow'>
                        <div className='feedCommentprofile'></div>
                        <input type="text" className='feedCommentcontent'></input>
                    </div>
                    </div>
                </div>
                <div className="feed-item"> 
                    <div className="feedHeader">
                        <div className="feedProfile"></div>
                        <div className="feedTitle">
                            <div className="feedTitlename">이수종</div>
                            <div className="feedTitletime">6시간</div>
                        </div>
                    </div>
                    <div className="feedContent">안녕 여러분 여기가 페이스북이구나</div>
                    <div className="feedLike">
                        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" className="feedLikeimg"></img>
                        <span className="feedLikecounts"></span> 
                    </div>
                    <div className="feedButtons">
                        <button className="feedLikebutton">좋아요</button>
                        <button className="feedCommentbutton">댓글달기</button>
                        <button className="feedSharebutton">공유하기</button>
                    </div>
                    <div className='feedCommentshow'>
                        <div className='feedCommentprofile'></div>
                        <input type="text" className='feedCommentcontent'></input>
                    </div>
                </div>
                <div className="feed-item">
                    <div className="feedHeader">
                        <div className="feedProfile"></div>
                        <div className="feedTitle">
                            <div className="feedTitlename">정유진</div>
                            <div className="feedTitletime">6시간</div>
                        </div>
                    </div>
                    <div className="feedContent">안녕 여러분 여기가 페이스북이구나랄라랄</div>
                    <div className="feedLike">
                        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" class="feedLikeimg"></img>
                        <span className="feedLikecounts"></span> 
                    </div>
                    <div className="feedButtons">
                        <button className="feedLikebutton">
                            <div>좋아요</div>
                        </button>
                        <button className="feedCommentbutton">댓글달기</button>
                        <button classNames="feedSharebutton">공유하기</button>
                    </div>
                    <div className='feedCommentshow'>
                        <div className='feedCommentpofile'></div>
                        <input type="text" className='feedCommentcontent'></input>
                    </div>
                </div>
            </div>
        </div>
        <div id="box-container-right">
            <div className="side-sec-txt">스폰서</div>
            <div className="side-sec-txt">회원님의 페이지</div>
            <div className="side-sec-txt">생일</div>
        </div>
      </div>
    </body>

     </div>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
