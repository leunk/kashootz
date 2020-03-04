import React from 'react';
import './App.css';
import questions from './questions.json';

const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2
const TIME_LIMIT = 5

class QuizQuestion extends React.Component{
  render(){
    return <>
    <h1>{this.props.question}</h1>
    {this.props.answer.Map((v, i) =>
    <input onClick={() => this.props.nextQuestion()} type="button" key={i} value={v.text}/>)}
    </>
  }
}

class TitlePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {titleText: "Welcome to KASHOOTZ!",
      currentState: TITLE_STATE,
      counter: 0,
      currentQuestion: TITLE_STATE
    }
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(){
    clearInterval(this.timer)
    this.setState({
      titeText:"You answered X",
      currentState: FINAL_STATE
    })
  }
  countdown(){
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.this.state.counter < this.timeLimit){
      this.setState({
        titleText: "Let's go, ladies",
        counter: this.state.counter + 1
      })
    } else {
      this.MediaStreamAudioDestinationNode({
        titleText: "BEGINNING KASHOOTZ",
        currentState: QUESTION_STATE,
        counter: 0
      })
      this.timer = setInterval(() => this.this.countdown(), 1000)
      clearInterval(this.timer)
    }
  }
  start(){
    console.log("Rev ur engines")
    this.setState({titleText:"Quiz is starting get ready!", counter:0})
    this.timer = setInterval(() => this.countdown(), 1000)
  }
  render(props){
    return(
      <>
      <p>{this.timeLimit - this.state.counter}</p>
      {((this.state.currentState === TITLE_STATE) ?
      <>
      <h2>{this.state.titleText}</h2>
      <input className="start" type="button" value="start" onclick={()=>this.start()} />
      </>)}
      </>
}


function App() {
  return (
    <TitlePage />
  )
}

export default App;
