import React from "react";

export default function AnswerCard(props) {
  const { question, link, video } = props.currentQuestion[0];
  return <div className="answerCard-div">
      <h2>{question}</h2>
      <p>{props.currentAnswer}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Article about question
      </a>
      <br />
      <a href={video} target="_blank" rel="noopener noreferrer">
        Video about question
      </a>
    </div>;
}
