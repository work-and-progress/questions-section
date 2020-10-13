import React from 'react';
import style from './Paginate.css';

function Paginate() {
  return (
    <div>
      <button type="button" id="prevButton" className={style.page_button}>
        <i className="fas fa-caret-left" />
      </button>
      <button type="button" id="nextButton" className={style.page_button}>
        <i className="fas fa-caret-right" />
      </button>
    </div>
  );
}

export default Paginate;
