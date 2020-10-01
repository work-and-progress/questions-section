import React from 'react';
import Pulldown from './Pulldown/Pulldown';
import style from './QuestionsControlBar.css';

function QuestionsControlBar(props) {
  return (
    <div className={ style.controlBar }>
      <div>
        <span className={ style.label}>Questions</span>
      </div>
      <Pulldown />
    </div>
  );
}

export default QuestionsControlBar;
