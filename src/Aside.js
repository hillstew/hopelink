import React from "react";

export default function Aside(props) {
  return (
    <aside>
      <p>{props.userName}</p>
      <button onClick={props.updateShowSavedAnswers}>See Saved Answers</button>
    </aside>
  );
}
