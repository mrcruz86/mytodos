import React, { Component } from 'react';

import Title from '../common/Title';
import AddToDo from './AddToDo';
import ToDo from './ToDo';

let count = 0;

export default class ToDoList extends Component {
  state = {
    todos: [],
  }

  addToDo = (t) => {
    const todo = t;
    const newArray = this.state.todos;

    if (todo.title !== undefined) {
      todo.id = count;
      count += 1;
      newArray.unshift(todo);
      this.setState({
        todos: newArray,
      });
    }
  }

  render() {
    return (
      <div className="ToDoList-container">
        <header className="ToDoList-header">
          <Title text="To-Do" />
          <AddToDo addToDo={this.addToDo} />
        </header>


        { this.state.todos.map(todo => (
          <ToDo todo={todo} key={todo.id} />
          ))}

      </div>
    );
  }
}
