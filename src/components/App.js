import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Calculator from "./parts/Calculator";
import TicTacToe from "./parts/TicTacToe";
import Markdown from "./parts/Markdown";
import Timer from "./parts/Timer";
import Todo from "./parts/Todo";
import Other from "./parts/Other";
import Blog from "./parts/Blog";
import TaskPlanner from "./parts/TaskPlanner";
import Navigation from "./parts/particles/Navigation";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          
          <Switch>
            <Route exact path='/'>
              <h2>MAIN PAGE</h2>
            </Route>
            <Route path='/calculator'>
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
            <Route path='/other'>
              <Other />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/task-planner'>
              <TaskPlanner />
            </Route>
          </Switch>
          
        </Router>
      </div>
    )
  }
};

export default App;
