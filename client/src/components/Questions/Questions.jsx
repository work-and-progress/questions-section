import React from 'react';
import axios from 'axios';

import QuestionsTab from './QuestionsTab/QuestionsTab';
import QuestionsAskBar from './QuestionsAskBar/QuestionsAskBar';
import QuestionsList from './QuestionsList/QuestionsList';
import QuestionsControlBar from './QuestionsControlBar/QuestionsControlBar';
import style from './Questions.css';


class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.handleAsk = this.handleAsk.bind(this);
  }

  handleAsk() {
    console.log('Clicked Ask!');
    this.setState();
  }

  getQuestions() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/questions/1'
    })
      .then(res => {
        this.setState({
          questions: [...res.data]
        });
        // console.log('====== Get Questions ======')
        // console.log(this.state.questions);
      })
      .catch('Error getting questions');
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className={ style.container }>
        <QuestionsTab />
        <QuestionsAskBar handleAsk={this.handleAsk} />
        <QuestionsControlBar />
        <QuestionsList />
      </div>
    );
  }
}

export default Questions;
