import React, { Component } from "react";
import generateRandomNumber from "./utils/helper";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {},
      currentAnswer: ""
    };
  }

  getRandomQuestion(props, randomIndex) {
    const question = this.props.techQuestions.slice(randomIndex, 1);
    return question;
  }

  componentDidMount(props) {
    const randomNum = generateRandomNumber(this.props.techQuestions.length);
    const [...question] = this.getRandomQuestion(randomNum);
    this.setState({ currentQuestion: question });
  }

  render() {
    return (
      <div>
        <h2>{this.state.currentQuestion.question}</h2>
        <form>
          <input />
          <button>Save Answer</button>
        </form>
      </div>
    );
  }
}

export default Question;
