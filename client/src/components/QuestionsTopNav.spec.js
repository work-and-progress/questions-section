import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsTopNav from './QuestionsTopNav.jsx';

import { shallow, mount } from 'enzyme';

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

  it('should call a function when button is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <QuestionsTopNav handleClick={mockFn} />
    );
    wrapper.find('button').simulate('click')
    expect(mockFn).toHaveBeenCalled();
  })
});
