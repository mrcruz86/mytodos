import React, { Component } from 'react';
import add from '../add.svg';

const todo = {
  title: '',
};

export default class AddToDo extends Component {
  render() {
    return (
      <div className="AddToDo-container">
        <input className="AddToDo-input" type="text" ref={input => todo.title = input} />
        <button className="AddToDo-button" onClick={this.props.addToDo}>
          <img src={add} alt="add button" />
        </button>
      </div>
    );
  }
}
