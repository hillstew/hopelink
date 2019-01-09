import React from "react";
import { shallow } from "enzyme";
import Aside from "../Aside";

let mockUserName = "Hillary"
let updateShowSavedAnswersMock = jest.fn();

describe('Aside', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Aside 
      userName={mockUserName}
      updateShowSavedAnswers={updateShowSavedAnswersMock}
    />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});