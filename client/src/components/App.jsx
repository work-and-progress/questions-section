import React from 'react';
import Questions from './Questions/Questions';
import style from './App.css';

function App() {
  return (
    <div className={ style.container }>
      <Questions
        className={ style.mid }
      />
    </div>
  );
}

export default App;
