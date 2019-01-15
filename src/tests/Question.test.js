import React from "react";
import { shallow } from "enzyme";
import Question from "../Question";

let techQuestions = [
  {
    question:
      "What is the difference between local and global variables, and how do they relate to hoisting?",
    category: "javascript",
    link:
      "https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/",
    video: "https://www.youtube.com/watch?v=iJKkZA215tQ&t=244s"
  },
  {
    question: "What is closure?",
    category: "javascript",
    link:
      "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36",
    video: "https://www.youtube.com/watch?v=-xqJo5VRP4A"
  },
  {
    question: "Describe private and public class fields",
    category: "javascript",
    link:
      "https://tylermcginnis.com/javascript-private-and-public-class-fields/",
    video: "https://www.youtube.com/watch?v=ZxpdR_C7RVA"
  },
  {
    question: "What is the difference between forEach and map?",
    category: "javascipt",
    link:
      "https://medium.com/@bretdoucette/foreach-v-map-javascript-the-definition-and-the-difference-5eaa65e15b65",
    video: "https://codeburst.io/javascript-map-vs-foreach-f38111822c0f"
  }
];

let mockAnswer = "The answer is";
let savedAnswers = [
  {
    answer: mockAnswer,
    question: {
      category: "javascipt",
      link: "https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/",
      question: "What is object and array destructuring?",
      video: "https://www.youtube.com/watch?v=RJaRRS27100"
    }
  }
];

let updateSavedAnswersMock = jest.fn();
let showSavedAnswersMock = jest.fn();


describe('Question', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Question 
        techQuestions={techQuestions}
        savedAnswers={savedAnswers}
        updateSavedAnswers={updateSavedAnswersMock}
        showSavedAnswers={showSavedAnswersMock}/>
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when updateCurrentAnswer is invoked on change', () => {
    const mockEvent = { target: { value: "My answer is"} }
    wrapper.instance().updateCurrentAnswer(mockEvent);
    expect(wrapper.state().currentAnswer).toEqual("My answer is")
  })

  it('should increment the current index when changeToNextQuestion', () => {
    expect(wrapper.state().currentQuestionIndex).toEqual(0);
    wrapper.instance().changeToNextQuestion();
    expect(wrapper.state().currentQuestionIndex).toEqual(1);
  })

  it('should decrement the current index when changeBackToPreviousQuestion', () => {
    expect(wrapper.state().currentQuestionIndex).toEqual(0);
    wrapper.instance().changeBackToPreviousQuestion();
    expect(wrapper.state().currentQuestionIndex).toEqual(19);
  })


});