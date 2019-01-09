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




});
