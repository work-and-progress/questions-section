import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

import style from './QuestionsAskBar.css';

function QuestionsAskBar({ handleAsk }) {
  return (
    <div className={style.askBar}>
      <span className={style.label}>
        Questions
      </span>

      <Button
        handleAsk={handleAsk}
      />

    </div>
  );
}

QuestionsAskBar.propTypes = {
  handleAsk: PropTypes.func.isRequired,
};

export default QuestionsAskBar;
