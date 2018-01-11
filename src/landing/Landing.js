import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
// import LandingBtn from './LandingBtn';

class Landing extends Component {
  state = {
    isActive: JSON.parse(localStorage.getItem('active')),
    leaveBtn: {
      id: 1,
    },
  }

  render() {
    if (this.state.isActive) {
      return <Redirect to="/todos" />;
    }

    return (
      <div className="Landing Onboarding-grid">
        <LandingHeader>
          <h1 className="small-header">Welcome!</h1>
        </LandingHeader>
        <LandingMsg>
          <p className="large-text">Let's setup your ToDo list.</p>
        </LandingMsg>
        <LandingBtn key={this.state.leaveBtn.id}>
          <Link className="medium-btn-link" to="/welcome">
            Get Started
          </Link>
        </LandingBtn>
      </div>
    );
  }
}

export default Landing;

const LandingHeader = styled.div`
  position: relative;
  grid-row: 1;
  grid-column: 2;
  display: flex;
  align-items: flex-end;

  h1 {
    color: #FFC421;
  }
`;

const LandingMsg = styled.div`
  position: relative;
  grid-row: 2;
  grid-column: 2 / 4;
  display: flex;
  align-items: flex-end;

  p {
    margin: 0px;
    max-width: 560px;
    color: #9296A0;
  }
`;

const LandingBtn = styled.div`
  position: relative;
  grid-row: 3;
  grid-column: 2 / 4;

  a {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #15D5EE;
    border: 3px solid #15D5EE;
    transition: color 0.1s ease-in-out;
  }

  a:hover {
    color: #fff;
    background-color: #15D5EE;
  }
`;
