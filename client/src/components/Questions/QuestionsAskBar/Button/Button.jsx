import React from 'react';
import style from './Button.css';

function Button ({ handleAsk }) {
  return (
    <button
      type="button"
      onClick={ handleAsk }
      className={ style.askButton }
    >
    ASK A QUESTION
    </button>
  )
};

export default Button;
