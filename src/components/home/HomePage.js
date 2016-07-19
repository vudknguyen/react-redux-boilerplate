import React from 'react';
import { Link } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Boilerplate</h1>
        <p>React, Redux and React Router in ES6</p>
        <Link to="about" className="btn btn-primary btn-large">About</Link>
      </div>
    );
  }
}

export default HomePage;
