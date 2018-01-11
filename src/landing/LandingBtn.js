import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class LandingBtn extends Component {
  componentWillLeave(cb) {
    const el = this.container;
    console.log('component leaving');
    cb();
  }

  render() {
    return (
      <div ref={(element) => { this.container = element; }}>
        <Link className="medium-btn-link" to="/welcome">
          Get Started
        </Link>
      </div>
    );
  }
}

export default LandingBtn;
