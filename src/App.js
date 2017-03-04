import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

// Quiz Banner
function QuizBanner(props) {
  return (
    <PageHeader>Campbell Quiz <small>Test your knowledge of this <label bsClass="label" bsStyle="danger">magnetic</label> family</small></PageHeader>
    );
}

// Tab Navigation
class QuizNaviation extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Tabs activeKey={1}>
        <Tab eventKey={1} title="1">Tab 1</Tab>
        <Tab eventKey={2} title="2">Tab 2</Tab>
        <Tab eventKey={3} title="3">Tab 3</Tab>
        <Tab eventKey={4} title="4">Tab 4</Tab>
      </Tabs>
      );
  }
}

// Question Prompt
function QuestionPrompt(props) {
  return (
    <th><tr>Question prompt</tr></th>
    );
}

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
        <QuizBanner />
        <QuizNaviation />
        <Button bsStyle="info" bsSize='large'>Danger</Button>
      </div>
    );
  }
}

export default App;
