import React from 'react';
import Pulldown from './Pulldown/Pulldown';
import style from './QuestionsControlBar.css';

function QuestionsControlBar() {
  return (
    <div className={style.controlBar}>
      <div>
        <span className={style.label}>1–4 of 4 Questions</span>
      </div>
      <Pulldown />
    </div>
  );
}

export default QuestionsControlBar;
