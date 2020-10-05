import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question/Question';

function QuestionsList({ questions, toggleAnswerForm }) {
  return (
    <div>
      {questions.map((question) => (
        <Question
          question={question}
          key={question.date}
          toggleAnswerForm={toggleAnswerForm}
        />
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
  toggleAnswerForm: PropTypes.func.isRequired,
};

QuestionsList.defaultProps = {
  questions: [],
};

export default QuestionsList;
