import React, { Component } from "react";
import BrowserAlert from "./parts/BrowserAlert";
import Timer from "./parts/Timer";
import Todo from "./parts/Todo";
import Markdown from "./parts/Markdown";


class App extends Component {
  render() {
    return (
      <div>
        <h1>типа H1 могуsdadas</h1>
        <Timer startCount={0}/>
        <Todo/>
        {/* <Markdown/> */}
        {/* <BrowserAlert name="LOX"/> */}
      </div>
    )
  }
};

export default App;
