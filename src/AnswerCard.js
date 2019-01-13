import React, { Component } from "react";

class AnswerCard extends Component {
  constructor(props) {
    super(props);
  }

  createAnswerPackage = () => {
    let answer = {
      question: this.props.techQuestions[this.props.currentQuestionIndex],
      answer: this.props.currentAnswer
    };
    this.props.updateSavedAnswers(answer);
  };

  render() {
    const { question, link, video } = this.props.techQuestions[
      this.props.currentQuestionIndex
    ];
    return (
      <div className="answerCard-div">
        <h2>{question}</h2>
        {this.props.isSubmitted && (
          <button onClick={this.props.showQuestion}>Show me a question</button>
        )}
        <p>{this.props.currentAnswer}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Article about question
        </a>
        <br />
        <a href={video} target="_blank" rel="noopener noreferrer">
          Video about question
        </a>
        {this.props.isSubmitted && (
          <button onClick={this.createAnswerPackage}>Save Answer</button>
        )}
      </div>
    );
  }
}

export default AnswerCard;
