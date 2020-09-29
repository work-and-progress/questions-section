import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsTopNav from './QuestionsTopNav.jsx';

import { shallow } from 'enzyme';
import '../setupTests.js'

describe('QuestionTopNav unit tests', () => {
  it ('Renders without crashing', () => {
    shallow(<QuestionsTopNav />);
  });
  it("renders QUESTIONS header", () => {
    const wrapper = shallow(<QuestionsTopNav />);
    const tabTitle = <span>QUESTIONS</span>;
    expect(wrapper.contains(tabTitle)).toEqual(true);
  });
  // it('"ASK A QUESTION" button invokes handler', () => {
  // });
});
