import React, { Component } from "react";

function BrowserAlert (props) {
  return <div>
    <h2>Kinda Alert shit {props.name}</h2>
    <p>============================================</p>
    {/* <div class="browser-alert">
      <div class="content-wrapper">
          <p> <span class="icon mr"></span>You are using an unsupported browser. Some features may not be available. For the best experience, use modern browser.</p><span class="close icon"></span>
      </div>
    </div> */}
  </div>
};

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

  
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default Comment;
