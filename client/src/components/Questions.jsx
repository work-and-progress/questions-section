import React from 'react';
import QuestionsTopNav from './QuestionsTopNav';
import QuestionsList from './QuestionsList';

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
      <div>
        <h1>Questions</h1>
        <QuestionsTopNav handleAsk={this.handleAsk} />
        <QuestionsList />
      </div>
    );
  }
}

export default Questions;
