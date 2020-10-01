import React from 'react';
import Button from './Button/Button';
import style from './QuestionsAskBar.css';

function QuestionsAskBar({ handleAsk }) {
  return (
    <div className={ style.askBar }>
      <span className={ style.label }>
        Questions
      </span>

      <Button
        style={{}}
        handleAsk={handleAsk}
      />

    </div>
  );
}

export default QuestionsAskBar;
