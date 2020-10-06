import React from 'react';
import Paginate from './Paginate/Paginate';
import style from './QuestionsPageBar.css';

function QuestionsPageBar() {
  return (
    <div className={style.page_bar}>
      <div>
        <span className={style.label}>1–4 of 4 Questions</span>
      </div>
      <Paginate />
    </div>
  );
}

export default QuestionsPageBar;
