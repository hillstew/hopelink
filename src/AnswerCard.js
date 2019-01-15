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
        {this.props.showSavedAnswers === false && <h2>{question}</h2>}
        {this.props.showSavedAnswers && <h2>{this.props.currentQuestion}</h2>}
        {this.props.isSubmitted && (
          <button onClick={this.props.showQuestion}>Show me a question</button>
        )}
        <p>
          <span>YOUR ANSWER:</span> {this.props.currentAnswer}
        </p>
        <div>
          <h3>RESOURCES</h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Article about question
          </a>
          <a href={video} target="_blank" rel="noopener noreferrer">
            Video about question
          </a>
        </div>
        {this.props.isSubmitted && (
          <button className="answerCard-save-answer" onClick={this.createAnswerPackage}>Save Answer</button>
        )}
      </div>
    );
  }
}

export default AnswerCard;
