import React from 'react';
import propTypes from 'prop-types';
import style from './Button.css';

function Button({ handleAnswer }) {
  return (
    <button
      type="button"
      onClick={handleAnswer}
      className={style.button}
    >
      POST ANSWER
    </button>
  );
}

Button.propTypes = {
  handleAnswer: propTypes.func.isRequired,
};

export default Button;
