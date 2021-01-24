import React, { Component } from "react";
import BrowserAlert from "./parts/BrowserAlert";
import Timer from "./parts/Timer";
import Todo from "./parts/Todo";
import TitleCounter from "./parts/TitleCounter";
import Markdown from "./parts/Markdown";


class App extends Component {
  render() {
    return (
      <div>
        <Timer />
        <Todo />
        <TitleCounter />
        <Markdown />
        {/* <BrowserAlert /> */}
      </div>
    )
  }
};

export default App;
