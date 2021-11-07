import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Calculator from "./parts/calculator/Calculator";
import TicTacToe from "./parts/TicTacToe";
import Timer from "./parts/Timer";
import Todo from "./parts/Todo";
import Other from "./parts/Other";
import Blog from "./parts/posts/Blog";
import Navigation from "./parts/particles/Navigation";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          
          <Switch>
            <Route exact path='/'>
              <div className="container">
                <h2>MAIN PAGE</h2>
              </div>
            </Route>
            <Route path='/calculator'>
              <div className="container">
                <Calculator />
              </div>
            </Route>
            <Route path='/krestiki'>
              <div className="container">
                <TicTacToe />
              </div>
            </Route>
            <Route path='/timer'>
              <div className="container">
                <Timer />
              </div>
            </Route>
            <Route path='/todo'>
              <div className="container">
                <Todo />
              </div>
            </Route>
            <Route path='/other'>
              <div className="container">
                <Other />
              </div>
            </Route>
            <Route path='/blog'>
              <div className="container">
                <Blog />
              </div>
            </Route>
          </Switch>
          
        </Router>
      </>
    )
  }
};

export default App;
