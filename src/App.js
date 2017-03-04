import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

// QuizBanner
function QuizBanner(props) {
  return (
    <PageHeader>Campbell Quiz <small>Test your knowledge of this <label bsClass="label" bsStyle="danger">magnetic</label> family</small></PageHeader>
    );
}
// Tab Navigation

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <QuizBanner/>
        <Button bsStyle="info" bsSize='large'>Danger</Button>
      </div>
    );
  }
}

export default App;
