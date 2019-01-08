import React, { Component } from "react";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  updateState = event => {
    this.setState({
      userName: event.target.value
    });
  };

  updateUserName = () => {
    this.props.updateUserName(this.state.userName);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <div className="landing-page-div">
        <p>Please enter your name</p>
        <input
          onChange={this.updateState}
          value={this.state.userName}
          type="text"
        />
        <button onClick={this.updateUserName}>Save</button>
      </div>
    );
  }
}
