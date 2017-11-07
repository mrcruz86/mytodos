import React, { Component } from 'react';
import PropTypes from 'prop-types';
import add from '../add.svg';

export default class AddToDo extends Component {
  handleFormEntry = (e) => {
    e.preventDefault();
    const todo = {
      title: this.input.value,
    };
    this.props.addToDo(todo);
    this.input.value = '';
  }

  render() {
    return (
      <form className="AddToDo-container" onSubmit={this.handleFormEntry}>
        <input className="AddToDo-input" type="text" ref={(element) => { this.input = element; }} />
        <button className="AddToDo-button" type="submit">
          <img src={add} alt="add button" />
        </button>
      </form>
    );
  }
}

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
};
