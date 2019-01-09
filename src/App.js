import React, { Component } from "react";
import "./styles/main.scss";
import Aside from "./Aside";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Question from "./Question";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      techQuestions: [],
      randomQuestions: [],
      savedAnswers: [],
      showSavedAnswers: false
    };
  }

  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/interviewQuestions")
      .then(data => data.json())
      .then(data => {
        this.setState({
          techQuestions: data.interviewQuestions.technical,
          randomQuestions: data.interviewQuestions.random
        });
      })
      .catch(err => console.log("cards error", err));

    let answers = JSON.parse(localStorage.getItem("savedAnswers"));
    if (answers) {
      console.log(answers)
      this.setState({ savedAnswers: answers });
    }
  }

  updateUserName = userName => {
    this.setState({ userName });
  };

  updateSavedAnswers = answer => {
    const savedAnswers =
      this.state.savedAnswers === 0
        ? [answer]
        : [...this.state.savedAnswers, answer];
    this.setState({ savedAnswers }, () => {
      this.saveToLocalStorage();
    });
  };

  saveToLocalStorage() {
    localStorage.setItem(
      "savedAnswers",
      JSON.stringify(this.state.savedAnswers)
    );
  }

  updateShowSavedAnswers = () => {
    this.setState({ showSavedAnswers: true });
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
    const {
      userName,
      techQuestions,
      randomQuestions,
      savedAnswers,
      showSavedAnswers
    } = this.state;
    return (
      <div className="app">
        <Aside
          userName={userName}
          updateShowSavedAnswers={this.updateShowSavedAnswers}
        />
        <div>
          <Header />
          <Question
            techQuestions={techQuestions}
            randomQuestions={randomQuestions}
            savedAnswers={savedAnswers}
            updateSavedAnswers={this.updateSavedAnswers}
            showSavedAnswers={showSavedAnswers}
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
