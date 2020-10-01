import React from 'react';
import Button from './Button/Button';
// import style from './QuestionsTopNav.css';

function QuestionsTopNav({ handleAsk }) {
  return (
    <div
      style={{
        // fontFamily: 'futura',
        // fontSize: '12px',
        // fontWeight: '100',
        // letterSpacing: '.1rem',
        // width: '100%',
        // borderTop: '1px solid #000',
        // borderBottom: '1px solid #000',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px',
      }}
    >
      <h2
        style={{
          fontFamily: 'futura',
          fontSize: '14px',
          fontWeight: '600',
        }}
      >
        Questions
      </h2>

      <Button
        style={{}}
        handleAsk={handleAsk}
      />

    </div>
  );
}

export default QuestionsTopNav;
