import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsList from './QuestionsList.jsx';
import { shallow, mount } from 'enzyme';

describe('QuestionTopNav unit tests', () => {

  it ('Renders without crashing', () => {
    shallow(<QuestionsList />);
  });

});
