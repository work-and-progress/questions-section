import React from 'react';
// import propTypes from 'prop-types';
import style from './Button.css';

function Button() {
  return (
    <button
      type="button"
      // onClick={handleAsk}
      className={style.button}
    >
      Answer this Question
    </button>
  );
}

// Button.propTypes = {
//   handleAsk: propTypes.func.isRequired,
// };

export default Button;
