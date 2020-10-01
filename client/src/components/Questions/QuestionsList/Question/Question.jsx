import React from 'react';
import PropTypes from 'prop-types';
// import Answers from '../Answer/Answer';
import style from './Question.css';

function Question({ question }) {
  return (
    <div>
      {/* days since need to add timeago or similar */}
      <div className={style.user}>
        <span>{question.user.nickname}</span>
        ` · `
        <span>days ago</span>
      </div>
      <div className={style.question}>{question.text}</div>
      {/* <Answers answer={question.answers[0]} /> */}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    product_id: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.number,
    user: PropTypes.shape({
      nickname: PropTypes.string,
      email: PropTypes.string,
      location: PropTypes.string,
    }),
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        date: PropTypes.number,
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
};

Question.defaultProps = {
  question: PropTypes.shape({
    text: '',
    date: 0,
    user: PropTypes.shape({
      nickname: '',
      email: '',
      location: '',
    }),
    // Answers
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        text: '',
        date: 0,
        user: PropTypes.shape({
          nickname: '',
          email: '',
          location: '',
        }),
        useful: PropTypes.shape({
          yes: 0,
          no: 0,
        }),
      }),
    ),
  }),
};

export default Question;
