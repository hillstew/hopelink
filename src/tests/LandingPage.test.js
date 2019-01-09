import React from "react";
import { shallow } from "enzyme";
import LandingPage from "../LandingPage";

let updateUserNameMock = jest.fn();

describe("Landing Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LandingPage updateUserName={updateUserNameMock} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should updateState onChange of the input", () => {
    const mockEvent = { target: { value: "Hillary" } };
    wrapper.instance().updateState(mockEvent);
    expect(wrapper.state("userName").length).toEqual(7);
  });

  it("should updateUserName when the save button is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateUserName')
    wrapper.instance().forceUpdate()
    wrapper.find("button").simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});