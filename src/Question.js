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
    event.preventDefault()
    let answer = {
      question: this.state.currentQuestion,
      answer: this.state.currentAnswer
    };
    this.props.updateSavedAnswers(answer)
    this.setState({ isSubmitted: true })
  };

  render() {
    const { showSavedAnswers, savedAnswers } = this.props;
    const { isSubmitted, currentAnswer, currentQuestion } = this.state;
    if (showSavedAnswers && savedAnswers.length >= 1) {
      return savedAnswers.map(answer => {
        return (
          <AnswerCard
            currentAnswer={answer.answer}
            currentQuestion={answer.question}
          />
        );
      })
    }
    else if (isSubmitted) {
      return (
        <AnswerCard
          currentAnswer={currentAnswer}
          currentQuestion={currentQuestion}
        />
      );
    } else {
      return (
        <div className="question-div">
          <h2>{currentQuestion[0].question}</h2>
          <form onSubmit={this.toggleSubmitAnswer}>
            <textarea
              type="text"
              value={this.state.value}
              onChange={this.updateCurrentAnswer}
            />
            <input
              type="submit"
              value="Submit"
              className="question-submit-input"
            />
          </form>
        </div>
      );
    }
  }
}

export default Question;
