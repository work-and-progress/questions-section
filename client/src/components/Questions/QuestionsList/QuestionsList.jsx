import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question/Question';

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
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
    }),
  ),
};

QuestionsList.defaultProps = {
  questions: [],
};

export default QuestionsList;
