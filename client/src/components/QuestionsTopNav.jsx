import React from 'react';

function QuestionsTopNav({ handleClick }) {
  return (
    <div>
      <div>
        <span>REVIEWS </span>
        <span>QUESTIONS</span>
      </div>
      <div>
        <span>Questions</span>
        <button type="button" id="ask" onClick={handleClick}>ASK A QUESTION</button>
      </div>
    </div>
  );
}

export default QuestionsTopNav;
