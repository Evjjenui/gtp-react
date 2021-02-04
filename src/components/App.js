import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calculator from "./parts/Calculator";
import TicTacToe from "./parts/TicTacToe";
import Markdown from "./parts/Markdown";
import Timer from "./parts/Timer";
import Todo from "./parts/Todo";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul className="nav">
            <li>
              <Link to='/calculator'>Calculator</Link>
            </li>
            <li>
              <Link to='/markdown'>Markdown</Link>
            </li>
            <li>
              <Link to='/krestiki'>Krestiki</Link>
            </li>
            <li>
              <Link to='/timer'>Timer</Link>
            </li>
            <li>
              <Link to='/todo'>Todo</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path='/calculator'>
              <Calculator />
            </Route>
            <Route path='/markdown'>
              <Markdown />
            </Route>
            <Route path='/krestiki'>
              <TicTacToe />
            </Route>
            <Route path='/timer'>
              <Timer />
            </Route>
            <Route path='/todo'>
              <Todo />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
};

export default App;
