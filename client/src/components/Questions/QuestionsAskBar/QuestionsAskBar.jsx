import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

import style from './QuestionsAskBar.css';

function QuestionsAskBar({ toggleAskForm }) {
  return (
    <div className={style.askBar}>
      <span className={style.label}>
        Questions
      </span>

      <Button
        toggleAskForm={toggleAskForm}
      />

    </div>
  );
}

QuestionsAskBar.propTypes = {
  toggleAskForm: PropTypes.func.isRequired,
};

export default QuestionsAskBar;
