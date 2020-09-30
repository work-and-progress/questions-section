import React from 'react';
// import style from './QuestionsTab.css';

function QuestionsTab({ handleAsk }) {
  return (
    // <div className={ style.tab }>
    <div
      style={{
        fontFamily: 'futura',
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '.1rem',
        width: '100%',
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        // margin: '1rem auto',
        // display: 'flex',
        // flexDirection: 'row',
      }}
    >
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row',
      }}>
        <li style={{
          margin: '0'
        }}>REVIEWS</li>

        <li style={{
          margin: '0 60px',
          fontWeight: '100',
        }}>QUESTIONS</li>
      </ul>
    </div>
  );
}

export default QuestionsTab;
