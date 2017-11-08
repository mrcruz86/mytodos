import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Landing extends Component {
  state = {
    isActive: JSON.parse(localStorage.getItem('active')),
  }

  render() {
    if (this.state.isActive) {
      return <Redirect to="/todos" />;
    }

    return (
      <div className="centered">
        <h1>Welcome</h1>
        <p>Let's setup your ToDo list.</p>
        <Link to="/welcome">
          Get Started
        </Link>
      </div>
    );
  }
}

export default Landing;
