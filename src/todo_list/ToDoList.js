import React, { Component } from 'react';

import Title from '../common/Title';
import AddToDo from './AddToDo';
import ToDo from './ToDo';

export default class ToDoList extends Component {
      state = {
        todos: [
          {
            id: 123,
            title: 'Clean room',
            desc: 'I haven\'t cleaned in a month',
          },
          {
            id: 124,
            title: 'Go to sleep',
            desc: 'I need sleep!',
          },
        ],
      }

      addToDo = (todo) => {
        this.state.todos.unshift(todo);
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
