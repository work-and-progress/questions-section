import React from 'react';
import axios from 'axios';
import url from 'url';

import QuestionsTab from './QuestionsTab/QuestionsTab';
import QuestionsAskBar from './QuestionsAskBar/QuestionsAskBar';
import QuestionsList from './QuestionsList/QuestionsList';
import QuestionsControlBar from './QuestionsControlBar/QuestionsControlBar';
import QuestionForm from '../QuestionForm/QuestionForm';
import AnswerForm from '../AnswerForm/AnswerForm';
import QuestionsPageBar from './QuestionsPageBar/QuestionsPageBar';

import style from './Questions.css';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showAskForm: false,
      showAnswerForm: false,
    };
    this.toggleAnswerForm = this.toggleAnswerForm.bind(this);
    this.toggleAskForm = this.toggleAskForm.bind(this);
  }

  componentDidMount() {
    const { questions } = this.state;
    if (!Array.isArray(questions) || questions.length === 0) {
      this.getQuestions('7');
    }
  }

  getQuestions(product) {
    axios({
      method: 'get',
      // url: url.resolve('http://localhost:3003/questions/', product),
      url: url.resolve('/questions/', product),
    })
      .then((res) => {
        this.setState({
          questions: [...res.data],
        });
      })
      .catch('Error getting questions');
  }

  toggleAnswerForm() {
    const { showAnswerForm } = this.state;
    this.setState({
      showAnswerForm: !showAnswerForm,
    });
  }

  toggleAskForm() {
    const { showAskForm } = this.state;
    this.setState({
      showAskForm: !showAskForm,
    });
  }

  render() {
    const { questions, showAnswerForm, showAskForm } = this.state;
    return (
      <div className={style.container}>
        <QuestionsTab />
        <QuestionsAskBar toggleAskForm={this.toggleAskForm} />
        <QuestionsControlBar />
        <QuestionsList questions={questions} toggleAnswerForm={this.toggleAnswerForm} />
        <QuestionForm show={showAskForm} onClose={this.toggleAskForm} />
        <AnswerForm show={showAnswerForm} onClose={this.toggleAnswerForm} />
        {/* <QuestionsPageBar /> */}
      </div>
    );
  }
}

export default Questions;
