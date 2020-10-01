import React from 'react';
import PropTypes from 'prop-types';
import style from './Answer.css';

function Answer({ answer }) {
  return (
    <div className={style.answer}>
      <span>{answer.text}</span>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
  // answer.text: PropTypes.string,
};

Answer.defaultProps = {
  answer: {},
  // answer.text: '',
};

export default Answer;
