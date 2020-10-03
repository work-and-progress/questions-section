import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import style from './Answer.css';

// make yes/no buttons increment count
//   store counts in local state
//   implement click handler that updates local state
//
//   stretch: update database

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: 0,
      no: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { answer } = this.props;
    this.setState({
      yes: answer.useful.yes,
      no: answer.useful.no,
    });
  }

  handleClick(e, id) {
    // this.setState((prevState) => ({ yes: prevState.yes + 1 }));
    // this.setState((prevState) => ({ no: prevState.no + 1 }));
    e.preventDefault();
    this.setState((prevState) => ({ [id]: prevState[id] + 1 }));
  }

  render() {
    const { answer } = this.props;
    const { yes, no } = this.state;

    return (
      <div className={style.answer}>

        <div className={style.user}>
          <span>{`${answer.user.nickname} · x days ago`}</span>
        </div>

        <div className={style.text}>
          <span>{answer.text}</span>
        </div>

        <div>
          <span className={style.label}>Helpful?</span>
          <Button text={`Yes · ${yes}`} handleClick={(e) => this.handleClick(e, 'yes')} />
          <Button text={`No · ${no}`} handleClick={(e) => this.handleClick(e, 'no')} />
          <Button text="Report" handleClick={() => {}} />
        </div>
      </div>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      nickname: PropTypes.string,
      location: PropTypes.string,
    }),
    useful: PropTypes.shape({
      yes: PropTypes.number,
      no: PropTypes.number,
    }),
  }),
};

Answer.defaultProps = {
  answer: {
    text: '',
    date: '',
    user: {
      nickname: '',
      location: '',
    },
    useful: {
      yes: 0,
      no: 0,
    },
  },
};

export default Answer;
