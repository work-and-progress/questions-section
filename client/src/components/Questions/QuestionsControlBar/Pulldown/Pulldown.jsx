import React from 'react';
import style from './Pulldown.css';

function Pulldown (props) {
  return (
    <label for="sortBy">Sort by:
      <select name="sortBy" id="sortBy">
          <option value=""></option>
      </select>
    </label>
  )
};

export default Pulldown;
