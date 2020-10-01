import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAskBar from './QuestionsAskBar.jsx';
import { shallow, mount } from 'enzyme';

describe('QuestionsAskBar unit tests', () => {

  it ('Renders without crashing', () => {
    shallow(<QuestionsAskBar />);
  });

  it("Renders Questions title", () => {
    const wrapper = shallow(<QuestionsAskBar />);
    const tabTitle = 'Questions';
    expect(wrapper.contains(tabTitle)).toEqual(true);
  });

  it('Calls a function when button is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <QuestionsAskBar handleAsk={mockFn} />
    );
    wrapper.find('button').simulate('click')
    expect(mockFn).toHaveBeenCalled();
  })
});
