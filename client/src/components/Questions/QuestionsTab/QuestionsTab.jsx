import React from 'react';
import style from './QuestionsTab.css';

function QuestionsTab() {
  return (
    <div className={style.tab}>
      <ul className={style.menu}>
        <li className={style.menuItem}>REVIEWS</li>
        <li className={style.menuItemSelected}>QUESTIONS</li>
      </ul>
    </div>
  );
}

export default QuestionsTab;
