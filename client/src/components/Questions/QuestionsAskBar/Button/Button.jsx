import React from 'react';
import propTypes from 'prop-types';
import style from './Button.css';

function Button({ handleAsk }) {
  return (
    <button
      type="button"
      onClick={handleAsk}
      className={style.askButton}
    >
      ASK A QUESTION
    </button>
  );
}

Button.propTypes = {
  handleAsk: propTypes.func.isRequired,
};

export default Button;
