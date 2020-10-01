import React from 'react';
// import style from './Pulldown.css';

function Pulldown() {
  return (
    <label htmlFor="sortBy">
      Sort by:
      <select name="sortBy" id="sortBy">
        <option value="NewestQuestions"> </option>
      </select>
    </label>
  );
}

export default Pulldown;
