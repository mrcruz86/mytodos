import React, { Component } from 'react';
import './App.css';

import TopBar from './common/TopBar';
import ToDoList from './todo_list/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <ToDoList />
      </div>
    );
  }
}

export default App;
