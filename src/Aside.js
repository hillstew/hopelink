import React, { Component } from "react";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = { cardName: "Hello" };
  }
  
  render() {
    let { userName } = this.props;
    return (
      <aside>
        <p>{userName}</p>
      </aside>
    )
  }
}

export default Aside;
