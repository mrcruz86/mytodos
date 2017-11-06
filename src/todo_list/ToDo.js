import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({ todo }) => (
  <div className="ToDo-container">
    <span className="" />
    <p>{todo.title}</p>
    <small>{todo.desc}</small>
  </div>
);

export default ToDo;

ToDo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};
