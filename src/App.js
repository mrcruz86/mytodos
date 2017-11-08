import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import TopBar from './common/TopBar';
import Landing from './landing/Landing';
import Onboarding from './onboarding/Onboarding';
import ToDoList from './todo_list/ToDoList';

const App = () => (
  <Router>
    <div className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Onboarding} />
        <Route path="/todos" component={ToDoList} />
      </Switch>
    </div>
  </Router>
);

export default App;
