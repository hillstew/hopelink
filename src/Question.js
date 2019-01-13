import React, { Component } from "react";
import AnswerCard from "./AnswerCard";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnswer: "",
      isSubmitted: false,
      currentQuestionIndex: 0
    };
  }

  updateCurrentAnswer = event => {
    this.setState({ currentAnswer: event.target.value });
  };

  toggleSubmitAnswer = event => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  changeToNextQuestion = () => {
    let nextQuestionIndex = this.state.currentQuestionIndex + 1;
    if (nextQuestionIndex === 20) {
      nextQuestionIndex = 0;
    }
    this.setState({
      currentQuestionIndex: nextQuestionIndex
    });
  };

  showQuestion = () => {
    this.setState({ isSubmitted: false });
  };

  changeBackToPreviousQuestion = () => {
    let previousQuestionIndex = this.state.currentQuestionIndex - 1;
    if (previousQuestionIndex === 0) {
      previousQuestionIndex = 19;
    }
    this.setState({
      currentQuestionIndex: previousQuestionIndex
    });
  };

  render() {
    const {
      showSavedAnswers,
      savedAnswers,
      updateSavedAnswers,
      techQuestions
    } = this.props;
    const {
      isSubmitted,
      currentAnswer,
      currentQuestion,
      currentQuestionIndex
    } = this.state;
    if (showSavedAnswers && savedAnswers.length >= 1) {
      return savedAnswers.map(answer => {
        return (
          <AnswerCard
            currentAnswer={answer.answer}
            currentQuestion={answer.question}
            updateSavedAnswers={updateSavedAnswers}
            techQuestions={techQuestions}
            currentQuestionIndex={currentQuestionIndex}
          />
        );
      });
    } else if (isSubmitted) {
      return (
        <AnswerCard
          currentAnswer={currentAnswer}
          currentQuestion={currentQuestion}
          updateSavedAnswers={updateSavedAnswers}
          techQuestions={techQuestions}
          currentQuestionIndex={currentQuestionIndex}
          isSubmitted={isSubmitted}
          showQuestion={this.showQuestion}
        />
      );
    } else {
      return (
        <div className="question-div">
          <h2>{techQuestions[currentQuestionIndex].question}</h2>
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
          <button onClick={this.changeBackToPreviousQuestion}>BACK</button>
          <button onClick={this.changeToNextQuestion}>NEXT</button>
        </div>
      );
    }
  }
}

export default Question;
