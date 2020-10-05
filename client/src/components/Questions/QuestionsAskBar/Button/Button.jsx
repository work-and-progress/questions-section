import React from 'react';
import propTypes from 'prop-types';
import style from './Button.css';

function Button({ toggleAskForm }) {
  return (
    <button
      type="button"
      onClick={toggleAskForm}
      className={style.button}
    >
      ASK A QUESTION
    </button>
  );
}

Button.propTypes = {
  toggleAskForm: propTypes.func.isRequired,
};

export default Button;
