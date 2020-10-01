import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsTab from './QuestionsTab.jsx';
import { shallow, mount } from 'enzyme';

describe('QuestionsTab unit tests', () => {
  it ('Renders without crashing', () => {
    shallow(<QuestionsTab />);
  });
  it("Renders 'Reviews' and 'Questions' in tab", () => {
    const wrapper = shallow(<QuestionsTab />);
    const tabTitle1 = 'REVIEWS';
    const tabTitle2 = 'QUESTIONS';
    expect(wrapper.contains(tabTitle1)).toEqual(true);
    expect(wrapper.contains(tabTitle2)).toEqual(true);
  });
});
