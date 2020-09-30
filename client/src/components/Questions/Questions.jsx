import React from 'react';
import QuestionsTab from './QuestionsTab/QuestionsTab';
import QuestionsTopNav from './QuestionsTopNav/QuestionsTopNav';
import QuestionsList from './QuestionsList/QuestionsList';
// import style from './Questions.css';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleAsk = this.handleAsk.bind(this);
  }

  handleAsk() {
    console.log('Clicked Ask!');
    this.setState();
  }

  render() {
    return (
      <div
        style={{
          // display: 'grid',
          // gridTemplateColumns: 'auto 850px auto',
          // justifyContent: 'center',
          // gridColumnStart: '1',
          // gridColumnStart: '1',
          // gridColumnEnd:  '2',
        }}
      >
        <QuestionsTab />
        <QuestionsTopNav handleAsk={this.handleAsk} />
        <QuestionsList />
      </div>
    );
  }
}

export default Questions;
