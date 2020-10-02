import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import style from './Answer.css';

function Answer({ answer }) {
  return (
    <div className={style.answer}>

      <div className={style.user}>
        <span>{`${answer.user.nickname} · x days ago`}</span>
      </div>

      <div className={style.text}>{answer.text}</div>

      <div className={style.buttonBar}>
        <span className={style.label}>Helpful?</span>
        <Button text={`Yes · ${answer.useful.yes}`} handleClick={() => {}} />
        <Button text={`No · ${answer.useful.no}`} handleClick={() => {}} />
        <Button text="Report" handleClick={() => {}} />
      </div>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      nickname: PropTypes.string,
      location: PropTypes.string,
    }),
    useful: PropTypes.shape({
      yes: PropTypes.number,
      no: PropTypes.number,
    }),
  }),
};

Answer.defaultProps = {
  answer: {
    text: '',
    date: '',
    user: {
      nickname: '',
      location: '',
    },
    useful: {
      yes: 0,
      no: 0,
    },
  },
};

// Answer.defaultProps = {
//   answer: '',
// };

export default Answer;
