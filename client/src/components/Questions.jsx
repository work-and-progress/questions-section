import React from 'react';
import QuestionsTopNav from './QuestionsTopNav.jsx';
import QuestionsList from './QuestionsList.jsx';

function Questions () {
  return (
    <div>
      <h1>Questions</h1>
      <QuestionsTopNav />
      <QuestionsList />
    </div>
  )
};

export default Questions;
