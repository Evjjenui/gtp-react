import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Calculator from './components/parts/calculator/Calculator';
import TicTacToe from './components/TicTacToe';
import Timer from './components/Timer';
import Todo from './components/Todo';
import Other from './components/Other';
import Blog from './components/parts/posts/Blog';
import TaskPlanner from './components/TaskPlanner';
import Navigation from './components/parts/particles/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />

          <Switch>
            <Route exact path="/">
              <div className="container">
                <h2>MAIN PAGE</h2>
              </div>
            </Route>
            <Route path="/calculator">
              <div className="container">
                <Calculator />
              </div>
            </Route>
            <Route path="/krestiki">
              <div className="container">
                <TicTacToe />
              </div>
            </Route>
            <Route path="/timer">
              <div className="container">
                <Timer />
              </div>
            </Route>
            <Route path="/todo">
              <div className="container">
                <Todo />
              </div>
            </Route>
            <Route path="/other">
              <div className="container">
                <Other />
              </div>
            </Route>
            <Route path="/blog">
              <div className="container">
                <Blog />
              </div>
            </Route>
            <Route path="/task-planner">
              <div className="container">
                <TaskPlanner />
              </div>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
