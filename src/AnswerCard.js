import React, { Component } from "react";

export default function AnswerCard(props) {
  const { question, category, link, video } = props.currentQuestion[0];
  return (
    <div>
      <h2>{question}</h2>
      <p>{props.currentAnswer}</p>
      <a href={link} target="_blank">
        Article about question
      </a><br></br>
      <a href={video} target="_blank">
        Video about question
      </a>
    </div>
  );
}
