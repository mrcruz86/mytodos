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
      <div className="Landing Onboarding-grid">
        <div className="Landing-header">
          <h1>Welcome!</h1>
        </div>
        <div className="Landing-msg">
          <p>Let's setup your ToDo list.</p>
        </div>
        <div className="Landing-start">
          <Link to="/welcome">
            Get Started
          </Link>
        </div>

      </div>
    );
  }
}

export default Landing;
