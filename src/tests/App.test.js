import React from "react";
import App from "../App";
import { shallow } from "enzyme";

let userName = "Hillary";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    localStorage.setItem('savedAnswers', '[1, 2, 3]');
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should setState when updateUserName is called", () => {
    expect(wrapper.state("userName").length).toEqual(0);
    wrapper.instance().updateUserName(userName);
    expect(wrapper.state("userName").length).toEqual(7);
  });

  it("should add new answer to savedAnswers to update state and local storage", () => {
    let answer = 4;
    wrapper.instance().updateSavedAnswers(answer)
    expect(wrapper.state("savedAnswers").length).toEqual(4)
  })

  it("should change showSavedAnswers to true when updateShowSavedAnswers is invoked", () => {
    wrapper.instance().updateShowSavedAnswers();
    expect(wrapper.instance().state.showSavedAnswers).toEqual(true);
  })

  it("should change showSavedAnswers to false when showMeAQuestion is invoked", () => {
    wrapper.instance().showMeAQuestion();
    expect(wrapper.instance().state.showSavedAnswers).toEqual(false);
  })


});
