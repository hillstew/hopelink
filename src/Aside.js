import React, { Component } from "react";

class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside>
        <p>{this.props.userName}</p>
        <button onClick={this.props.updateShowSavedAnswers}>
          See Saved Answers
        </button>
      </aside>
    );
  }
}

export default Aside;
