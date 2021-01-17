import React, { Component } from "react";
import BrowserAlert from "./parts/browser_alert";

import '../scss/application.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>типа H1 могуsdadas</h1>
        <BrowserAlert />
      </div>
    )
  }
};

export default App;
