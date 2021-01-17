import React, { Component } from "react";

class BrowserAlert extends Component {
  render() {
    return (
      <div>
        <h2>Kinda Alert shit</h2>
        <p>============================================</p>
        <div class="browser-alert">
          <div class="content-wrapper">
              <p> <span class="icon mr"></span>You are using an unsupported browser. Some features may not be available. For the best experience, use modern browser.</p><span class="close icon"></span>
          </div>
        </div>
      </div>
    )
  }
};

export default BrowserAlert;
