import React from 'react';
import style from './Paginate.css';

function Paginate() {
  return (
    <div>
      <button type="button"><i className="fas fa-caret-left" /></button>
      <button type="button"><i className="fas fa-caret-right" /></button>
    </div>
  );
}

export default Paginate;
