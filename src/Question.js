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
    const { isSubmitted, currentAnswer, currentQuestionIndex } = this.state;
    if (showSavedAnswers && savedAnswers.length >= 1) {
      return savedAnswers.map(answer => {
        return (
          <AnswerCard
            currentQuestion={answer.question.question}
            currentAnswer={answer.answer}
            updateSavedAnswers={updateSavedAnswers}
            techQuestions={techQuestions}
            currentQuestionIndex={currentQuestionIndex}
            savedAnswers={savedAnswers}
            showSavedAnswers={showSavedAnswers}
          />
        );
      });
    } else if (isSubmitted) {
      return (
        <AnswerCard
          currentAnswer={currentAnswer}
          updateSavedAnswers={updateSavedAnswers}
          techQuestions={techQuestions}
          currentQuestionIndex={currentQuestionIndex}
          isSubmitted={isSubmitted}
          showQuestion={this.showQuestion}
          savedAnswers={savedAnswers}
          showSavedAnswers={showSavedAnswers}
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
          <div>
            <button
              onClick={this.changeBackToPreviousQuestion}
              className="next-back-btn"
            >
              BACK
            </button>
            <button
              onClick={this.changeToNextQuestion}
              className="next-back-btn"
            >
              NEXT
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Question;
