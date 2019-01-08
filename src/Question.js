import React, { Component } from "react";
import generateRandomNumber from "./utils/helper";
import AnswerCard from "./AnswerCard";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {},
      currentAnswer: "",
      isSubmitted: false
    };
  }

  getRandomQuestion(randomIndex) {
    const question = [...this.props.techQuestions].splice(randomIndex, 1);
    return question;
  }

  updateCurrentAnswer = event => {
    this.setState({ currentAnswer: event.target.value });
  };

  componentWillMount() {
    const randomNum = generateRandomNumber(this.props.techQuestions.length);
    const question = this.getRandomQuestion(randomNum);
    this.setState({ currentQuestion: question });
  }

  toggleSubmitAnswer = event => {
    event.preventDefault();
    this.setState({ isSubmitted: true }, () => {
      localStorage.setItem('answers', {
        question: this.state.currentQuestion[0].question,
        answer: this.state.currentAnswer
      });
    });
  };

  render() {
    const { isSubmitted, currentAnswer, currentQuestion } = this.state;
    if (isSubmitted) {
      return (
        <AnswerCard
          currentAnswer={currentAnswer}
          currentQuestion={currentQuestion}
        />
      );
    } else {
      return (
        <div>
          <h2>{currentQuestion[0].question}</h2>
          <form onSubmit={this.toggleSubmitAnswer}>
            <textarea
              type="text"
              value={this.state.value}
              onChange={this.updateCurrentAnswer}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
}

export default Question;
