import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsControlBar from './QuestionsControlBar.jsx';
import { shallow, mount } from 'enzyme';

describe('QuestionsControlBar unit tests', () => {

  it ('Renders without crashing', () => {
    shallow(<QuestionsControlBar />);
  });

});
