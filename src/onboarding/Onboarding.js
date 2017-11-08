import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Onboarding extends Component {
  state = {
    complete: false,
  }

  completedOnboarding = () => {
    localStorage.setItem('active', JSON.stringify(true));
    this.setState({
      complete: true,
    });
  }

  render() {
    if (this.state.complete) {
      return <Redirect to="/todos" />;
    }


    return (
      <div className="centered">
        <h1>Onboarding</h1>
        <button onClick={this.completedOnboarding}>Complete</button>
      </div>
    );
  }
}

export default Onboarding;
