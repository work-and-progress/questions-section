import React from 'react';
import axios from 'axios';

import QuestionsTab from './QuestionsTab/QuestionsTab';
import QuestionsAskBar from './QuestionsAskBar/QuestionsAskBar';
import QuestionsList from './QuestionsList/QuestionsList';
import QuestionsControlBar from './QuestionsControlBar/QuestionsControlBar';
import QuestionForm from '../QuestionForm/QuestionForm';

import style from './Questions.css';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showAskForm: false,
    };
    this.toggleAskForm = this.toggleAskForm.bind(this);
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
      })
      .catch('Error getting questions');
  }

  toggleAskForm() {
    const { showAskForm } = this.state;
    this.setState({
      showAskForm: !showAskForm,
    });
  }

  render() {
    const { questions, showAskForm } = this.state;
    return (
      <div className={style.container}>
        <QuestionsTab />
        <QuestionsAskBar toggleAskForm={this.toggleAskForm} />
        <QuestionsControlBar />
        <QuestionsList questions={questions} />
        <QuestionForm show={showAskForm} onClose={this.toggleAskForm} />
      </div>
    );
  }
}

export default Questions;
