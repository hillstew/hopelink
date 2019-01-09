import React from "react";
import { shallow } from "enzyme";
import AnswerCard from "../AnswerCard";

let mockAnswer = "The answer is";
let mockQuestion = [{
  category: "javascipt",
  link: "https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/",
  question: "What is object and array destructuring?",
  video: "https://www.youtube.com/watch?v=RJaRRS27100"
}];

describe("AnswerCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AnswerCard currentAnswer={mockAnswer} currentQuestion={mockQuestion} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
