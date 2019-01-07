import React, { Component } from "react";
import "./styles/main.scss";
import Aside from "./Aside";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Question from "./Question";
// import { }

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      techQuestions: [],
      randomQuestions: []
    };
  }

  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/interviewQuestions")
      .then(interviewQuestions => interviewQuestions.json())
      .then(interviewQuestions => {
        this.setState({
          techQuestions: interviewQuestions.interviewQuestions.technical,
          randomQuestions: interviewQuestions.interviewQuestions.random
        });
      })
      .catch(err => console.log("cards error", err));
  }

  updateUserName = userName => {
    this.setState({ userName });
  };

  renderLandingPage() {
    return (
      <div>
        <Header />
        <LandingPage updateUserName={this.updateUserName} />
      </div>
    );
  }

  renderApp() {
    const { userName, techQuestions, randomQuestions } = this.state;
    return (
      <div className="app">
        <Aside userName={userName} />
        <div>
          <Header />
          <Question
            techQuestions={techQuestions}
            randomQuestions={randomQuestions}
          />
        </div>
      </div>
    );
  }

  render() {
    return this.state.userName === ""
      ? this.renderLandingPage()
      : this.renderApp();
  }
}

export default App;
