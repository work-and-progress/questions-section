import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question/Question';
// import style from './QuestionsList.css';

function QuestionsList({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <Question question={question} key={question.date} />
      ))}
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.array,
  question: PropTypes.string,
  question.date: PropTypes.string,
};

QuestionsList.defaultProps = {
  questions: [],
};

export default QuestionsList;
