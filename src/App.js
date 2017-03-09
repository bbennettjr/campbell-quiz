import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader, Tabs, Tab, Pager, ProgressBar, Table, Label } from 'react-bootstrap';


let guysQuestions = [
  {prompt: "What is Bob's real age?", choices: ["Too old to care", 65, "Science can't measure back that far", 56, "Go ahead, ask him"], correctAnswer: 4},
  {prompt: "Bob's personality is best described as:", choices: ["Cuddly", "Loveable", "Huggable", "Snuggly", "Nuzzlebug"], correctAnswer: 4},
  {prompt: "What does Bob care about most?", choices: ["His family", "His son-in-law", "His quiet time", "His dog", "Long bike rides"], correctAnswer: 0},
  {prompt: "What is Bob's favorite inanimate object?", choices: ["Chapstick", "McDonald's fries", "Steins", "Grapes", "Bottle Caps"], correctAnswer: 2},
  {prompt: "What is Bob's favorite brand?", choices: ["Arc'teryx", "The North Face", "Patagonia", "Marmot", "Eddie Bauer"], correctAnswer: 3},
  {prompt: "If Bob were an internet Meme:", choices: ["I wish sarcasm was available as a font.", "Hide your kids, hide your wife...and hide your husband.", "I don't have a bucket list but my fucket list is a mile long.", "We ate riiibs wit dis dude!", "Ain't nobody got time for that!"], correctAnswer: 0},
  {prompt: "Which would embarrass Bob most?", choices: ["Sleeping on Brad's couch", "Coming in last in a race", "Showing affection to Brad", "Riding a beach cruiser bike", "Caught singing Beyonce in the shower"], correctAnswer: 1},
  {prompt: "In a past life Bob was:", choices: ["Rodeo clown", "Research test subject", "King of a small island", "Survivor winner", "Vegan"], correctAnswer: 1},
  {prompt: "How would Bob describe his soon to be son-in-law?", choices: ["Like, so cool", "Freaking loud", "\"Touchey\"", "Wuss", "Knowitall"], correctAnswer: 2},
  {prompt: "If Bob were an iced cream:", choices: ["Rocky Road", "Cherry Vanilla", "Mint Chocolate Chip", "Mouse Tracks", "Spumoni"], correctAnswer: 3},
  {prompt: "Bob could kill which of these without mercy?", choices: ["Fly", "Ant", "Spider", "Mosquito", "Brad's heart"], correctAnswer: 4},
  {prompt: "Who would Bob turn to for help?", choices: ["Diane", "Kristen", "Elise", "Brad", "Nobody, you're all worthless."], correctAnswer: 1},
  {prompt: "What could Bob comfortably leave out of his daily routine?", choices: ["Brushing", "Clean undies", "Socks", "Morning grumpiness", "Coffee"], correctAnswer: 2},
  {prompt: "Bob's favorite Mickey trick:", choices: ["Sit", "Roll-over", "Shake", "Stay", "Bite Brad"], correctAnswer: 3},
  {prompt: "If Bob were a dad quote:", choices: ["\“Any man can be a father, but it takes someone special to be a dad.\”", "\“Having children is like living in a frat house — nobody sleeps, everything’s broken, and there’s a lot of throwing up.\”", "\“My daughter got me a ‘World’s Best Dad’ mug. So we know she’s sarcastic.\”", "\“Fatherhood is great because you can ruin someone from scratch.\”", "\"Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis.\""], correctAnswer: 3},
  {prompt: "If Bob wrote a play with Mickey as the lead, Mickey's character would be:", choices: ["Prince Mickerson", "Lord Micktenstein", "Count Mickers", "Sir Mickey, Knight of the Hound Table", "King Fluffy Pants"], correctAnswer: 3},
  {prompt: "What does Bob check out about himself in the mirror?", choices: ["Tensed buns", "Smooth scalp", "Flexed abs", "Slender tri's", "Toned back"], correctAnswer: 0},
  {prompt: "What is Bob's spirit animal?", choices: ["Eagle", "Dolphin", "Llama", "Shark", "Bear"], correctAnswer: 4},
  {prompt: "If Bob is feeling witty he'd say:", choices: ["Life's disappointments are harder to take when you don't know any swear words.", "I wish more people were fluent in silence.", "The only mystery in life is that kamikaze pilots wore helmets.", "Not only is there no God, but try finding a plumber on Sunday. ", "A closed mouth gathers no feet."], correctAnswer: 1},
  {prompt: "Bob's favorite type of hug:", choices: ["One-armed hug", "Bear-hug", "Side-hug", "Stiff-hug", "Wiggle-hug"], correctAnswer: 0},
  {prompt: "On a daily basis Bob most identifies with:", choices: ["Buddy the Elf", "Robin Hood", "Prince Humperdinck", "Cosmo Kramer", "Michael Scott"], correctAnswer: 2},
  {prompt: "Bob's celeb crush:", choices: ["Bruce Willis", "Vin Diesel", "Jason Statham", "Howie Mandel", "Patrick Stewart"], correctAnswer: 1}
];

var cousinQuestions = [
  {prompt: "Who is the girls' favorite cousin?", choices: ["Steve", "Brad", "Susan", "Elise", "Fred"], correctAnswer: 3}, 
  {prompt: "What is their favorite book?", choices: ["1", "2", "3", "4", "5"], correctAnswer: 3}
];
var edRichQuestinos = [{prompt: "Who is the MVP of Campbell & Co. Jewelers?", choices: ["Brad", "Ed", "Cody", "Elise", "Rich"], correctAnswer: 2},
{prompt: "Question 2", choices: ["1", "2", "3", "4", "5"], correctAnswer: 3}];
var royaltyQuestions = [{prompt: "Who is the princess?", choices: ["Kristen", "Diane", "Elise", "Brad", "Fred"], correctAnswer: 3},
{prompt: "Question 2?", choices: ["1", "2", "3", "4", "5"], correctAnswer: 3}];

function Quiz(qName, qQuestions) {
  let name = qName;
  let questions = qQuestions;
  let currentQ = 1;
  let history = [];

  // Get current question number
  this.getQuesNum = function() {
    return currentQ - 1;
  }
  // Increment question number
  this.IncQuesNum = function() {
    currentQ = currentQ >= questions.length ? questions.length : currentQ++;
  }
  // Decrement question number
  this.DecQuesNum = function() {
    currentQ = currentQ <= 0 ? 0 : currentQ--;
  }
  // Get current question prompt
  this.getQuesPrompt = function() {
    return questions[currentQ];
  }
  // Get history
  this.getHistory = function() {
    return history.slice();
  }
  // Set history
  this.setHistory = function(index, newVal) {
    if (questions[index] != undefined) {
      history[index] = newVal;
    }
  }
  // Get progress
  this.progress = function() {
    return Math.round(currentQ / (questions.length) * 100);
  }
  // Calculate score
  this.calcScore = function() {
    var myScore = 0;
    var i = 0;
    for (i; i < this.questions.length - 1; i++) {
      if (history[i] == this.questions[i].correctAnswer) {
        myScore++;
      }
    }
    return Math.round(100 * myScore / (this.questions.length - 1));
  }
}

let guyQuiz = new Quiz("Bobbo & the Guys", guysQuestions);
let cousinQuiz = new Quiz("John, Corinna & the Girls", cousinQuestions);
let edRichQuiz = new Quiz("Ed & Rich", edRichQuestinos);
let royaltyQuiz = new Quiz("The Royalty", royaltyQuestions);

/* ---------------------------- REACT ES6 and JSX Below ---------------------------- */

// Quiz Banner
function QuizBanner(props) {
  return (
    <PageHeader>Campbell Quiz <small>Test your knowledge of this <Label bsClass="label" bsStyle="danger">magnetic</Label> family</small></PageHeader>
    );
}

// Tab Navigation
class QuizNaviation extends Component {
  constructor(props) {
    super();
    this.state = {
      activeTabKey : 1,
      activeQuiz : null,
      currentQ : 1,
      history: []
      }
    this.selectTab = this.selectTab.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
  }

  selectTab(key){
    this.setState({activeTabKey : key});
  }

  handleClickRight() {
    let choice = this.state.history[this.state.currentQ - 1]
    if(choice === undefined){
      return;
    }
    this.setState({
      currentQ : this.state.currentQ >= 100 ? 100 : this.state.currentQ + 1,
    });


  }

  handleClickLeft() {
    this.setState({
      currentQ : this.state.currentQ <= 1 ? 1 : this.state.currentQ - 1
    });
  }

  updateHistory(index, newVal) {
    let history = this.state.history.slice();
    history[index] = newVal;
    this.setState({history : history})
  }

  render() {
    const currentQ = this.state.currentQ;
    const history = this.state.history;
    return (
      <div className="container">
        <Tabs activeKey={this.state.activeTabKey} onSelect={(key) => this.selectTab(key)}>
          <Tab eventKey={1} 
               title="The Real Bob" 
          >
            <QuestionPrompt 
              question={guysQuestions[this.state.currentQ - 1]} 
              history={this.state.history} 
              currentQ={this.state.currentQ} 
              updateHistory={this.updateHistory} 
            />
          </Tab>
          <Tab eventKey={2} title="JC & the Girls" >
          </Tab>
          <Tab eventKey={3} title="Ed & Rich" >
          </Tab>
          <Tab eventKey={4} title="The Royalty" >
          </Tab>
        </Tabs>
        <Pagination onClickRight={this.handleClickRight} onClickLeft={this.handleClickLeft} />
        <QuizProgress progress={Math.round(this.state.currentQ * 100) / 100}/>
      </div>
      );
  }
}

// Question Prompt
class QuestionPrompt extends Component {
  constructor(props) {
    super();
  }

  render() {
    // do map function of the history.currentquestion array using <Choice />
    console.log(this.props.history);
    return (
        <Table responsive hover>
          <thead>
            <tr><th><h4 className="text-center"><strong>{this.props.question.prompt}</strong></h4></th></tr>
          </thead>
          <tbody className="text-left">
            <tr><Choice 
                    isActive={this.props.history[this.props.currentQ - 1] === 0} 
                    answerChoice={this.props.question.choices[0]} 
                    onClick={() => this.props.updateHistory(this.props.currentQ - 1, 0)}
                 />
            </tr>
            <tr><Choice isActive={this.props.history[this.props.currentQ - 1] === 1} answerChoice={this.props.question.choices[1]} onClick={() => this.props.updateHistory(this.props.currentQ - 1, 1)}/></tr>
            <tr><Choice isActive={this.props.history[this.props.currentQ - 1] === 2} answerChoice={this.props.question.choices[2]} onClick={() => this.props.updateHistory(this.props.currentQ - 1, 2)}/></tr>
            <tr><Choice isActive={this.props.history[this.props.currentQ - 1] === 3} answerChoice={this.props.question.choices[3]} onClick={() => this.props.updateHistory(this.props.currentQ - 1, 3)}/></tr>
            <tr><Choice isActive={this.props.history[this.props.currentQ - 1] === 4} answerChoice={this.props.question.choices[4]} onClick={() => this.props.updateHistory(this.props.currentQ - 1, 4)}/></tr>
          </tbody>
        </Table>
      );
  }
}

function Choice(props) {
  return (
    <td className={props.isActive ? "success" : null} onClick={props.onClick}>{props.answerChoice}</td>
    );
}

// Pagination
function Pagination(props) {
  return (
    <div className="container">
    <Pager>
      <Pager.Item previous href="#" onClick={props.onClickLeft}>&larr; Previous</Pager.Item>
      <Pager.Item next href="#" onClick={props.onClickRight}>&rarr; Next</Pager.Item>
    </Pager>
    </div>
    );
}

// Quiz Progress Bar
function QuizProgress(props) {
  return (
    <div className="container">
      <ProgressBar bsStyle="success" now={props.progress}/>
    </div>
    );
}

// Quotes
function Quotes(props) {
  return (
    <div className="container text-left">
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
        <Quotes />
      </div>
    );
  }
}

export default App;
