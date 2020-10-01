import React from 'react';

function QuestionsTopNav({ handleAsk }) {
  return (
    <div>
      <div>
        <span>REVIEWS </span>
        <span>QUESTIONS</span>
      </div>
      <div>
        <span>Questions</span>
        <button type="button" id="ask" onClick={handleAsk}>ASK A QUESTION</button>
      </div>
    </div>
  );
}

export default QuestionsTopNav;
