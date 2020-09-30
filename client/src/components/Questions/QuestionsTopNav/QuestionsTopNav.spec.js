import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsTopNav from './QuestionsTopNav.jsx';
import { shallow, mount } from 'enzyme';
// import '../../../setupTests.js';

describe('QuestionTopNav unit tests', () => {

  it ('Renders without crashing', () => {
    shallow(<QuestionsTopNav />);
  });

  it("Renders Questions title", () => {
    const wrapper = shallow(<QuestionsTopNav />);
    const tabTitle = 'Questions';
    expect(wrapper.contains(tabTitle)).toEqual(true);
  });

  it('Calls a function when button is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <QuestionsTopNav handleAsk={mockFn} />
    );
    wrapper.find('button').simulate('click')
    expect(mockFn).toHaveBeenCalled();
  })
});
