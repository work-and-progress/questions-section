import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';

function Button({ text, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={style.button}
    >
      <span>{text}</span>
      {/* <span>{text} · {count}</span> */}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// Button.defaultProps = {
//   // count: '',
// };

export default Button;
