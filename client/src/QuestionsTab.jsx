import React from 'react';
import QuestionsActionBar from './QuestionsActionBar.jsx';
import QuestionsControlBar from './QuestionsControlBar.jsx';
import QuestionsHeader from './QuestionsHeader.jsx';

function QuestionsTab () {
  return (
    <div>
      <h1>Questions Tab</h1>
      <QuestionsActionBar />
      <QuestionsControlBar />
      <QuestionsHeader />
    </div>
  )
};

export default QuestionsTab;
