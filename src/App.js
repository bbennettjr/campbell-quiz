import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader, Button, Tabs, Tab, Pager, ProgressBar, Table } from 'react-bootstrap';

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
      <div className="container">
      <Tabs activeKey={1}>
        <Tab eventKey={1} title="The Real Bob"><QuestionPrompt /></Tab>
        <Tab eventKey={2} title="JC & the Girls"></Tab>
        <Tab eventKey={3} title="Ed & Rich"></Tab>
        <Tab eventKey={4} title="The Royalty"></Tab>
      </Tabs>
      </div>
      );
  }
}

// Question Prompt
function QuestionPrompt(props) {
  return (
    <div className="container">
      <Table responseive hover>
        <thead>
          <tr><th>Question prompt</th></tr>
        </thead>
        <tbody>
          <tr><td>choices</td></tr>
          <tr><td>choices</td></tr>
          <tr><td>choices</td></tr>
          <tr><td>choices</td></tr>
          <tr><td>choices</td></tr>
        </tbody>
      </Table>
    </div>
    );
}

// Pagination
function Pagination(props) {
  return (
    <div className="container">
    <Pager>
      <Pager.Item previous href="#">&larr; Previous</Pager.Item>
      <Pager.Item next href="#">&rarr; Next</Pager.Item>
    </Pager>
    </div>
    );
}

// Quiz Progress Bar
function QuizProgress(props) {
  return (
    <div className="container">
      <ProgressBar bsStyle="success" now={40} />
    </div>
    );
}

// Quotes
function Quotes(props) {
  return (
    <div className="container">
      <blockquote>
        <p>Mickey Bite!</p>
        <footer>Annoyed Bob in <cite title="Source Title">The Kids Came Home</cite></footer>
      </blockquote>
    </div>
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
        <Pagination />
        <QuizProgress />
        <Quotes />
      </div>
    );
  }
}

export default App;
