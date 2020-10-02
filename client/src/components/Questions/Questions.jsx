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
      questions: [],
    };
    this.handleAsk = this.handleAsk.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/questions/1',
    })
      .then((res) => {
        this.setState({
          questions: [...res.data],
        });
        // console.log('====== Get Questions ======');
        // console.log(this.state.questions);
      })
      .catch('Error getting questions');
  }

  handleAsk() {
    console.log('Clicked Ask!');
    this.setState();
  }

  render() {
    const { questions } = this.state;
    return (
      <div className={style.container}>
        <QuestionsTab />
        <QuestionsAskBar handleAsk={this.handleAsk} />
        <QuestionsControlBar />
        <QuestionsList questions={questions} />
      </div>
    );
  }
}

export default Questions;
