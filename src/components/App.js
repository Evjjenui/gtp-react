import React, { Component } from "react";
import Calculator from "./parts/Calculator";
import TicTacToe from "./parts/TicTacToe";


class App extends Component {
  render() {
    return (
      <div>
        {/* <Calculator /> */}
        <TicTacToe />
      </div>
    )
  }
};

export default App;
