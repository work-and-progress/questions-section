import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answer/Answer';
import Button from './Button/Button';
import style from './Question.css';

function Question({ question, toggleAnswerForm }) {
  const firstAnswer = question.answers[0];
  return (
    <div className={style.wrapper}>

      <div className={style.rowContainer}>

        <div className={style.colContainer}>
          <div className={style.user}>
            <span>{`${question.user.nickname} · x days ago`}</span>
          </div>

          <div className={style.text}>
            <span>{question.text}</span>
          </div>
        </div>

        <div className={style.answerCountWrapper}>
          <span className={style.answerCountData}>{question.answers.length}</span>
          <span className={style.answerCountLabel}>answers</span>
        </div>

      </div>

      <Button handleAsk={toggleAnswerForm} />
      <Answers answer={firstAnswer} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      nickname: PropTypes.string,
      location: PropTypes.string,
    }),
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        date: PropTypes.string,
        user: PropTypes.shape({
          nickname: PropTypes.string,
          email: PropTypes.string,
          location: PropTypes.string,
        }),
        useful: PropTypes.shape({
          yes: PropTypes.number,
          no: PropTypes.number,
        }),
      }),
    ),
  }),
  toggleAnswerForm: PropTypes.func.isRequired,
};

Question.defaultProps = {
  question: PropTypes.shape({
    text: '',
    date: '',
    user: PropTypes.shape({
      nickname: '',
      email: '',
      location: '',
    }),
  }),
};

export default Question;
