import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {}
    };
  }

  generateRandomQuestion(props) {
    console.log(this.props);
  }

  componentDidMount(props) {
    const questions = this.generateRandomQuestion(props);
  }

  render() {
    return <div />;
  }
}

export default Question;
