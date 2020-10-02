import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsList from './QuestionsList.jsx';
import { shallow, mount } from 'enzyme';

describe('QuestionList unit tests', () => {

  it ('Renders without crashing', () => {
    shallow(<QuestionsList />);
  });

});
