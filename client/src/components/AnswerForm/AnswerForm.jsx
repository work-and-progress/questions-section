import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

import style from './AnswerForm.css';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleAnswer = this.handleAnswer.bind(this);

    this.expandForm = this.expandForm.bind(this);
  }

  handleAnswer() {
    this.setState();
  }

  expandForm() {
    this.setState({
      expanded: true,
    });
  }

  render() {
    const { show, onClose } = this.props;
    const { expanded } = this.state;

    if (!show) {
      return null;
    }

    return (
      <div className={style.backdrop}>
        <form
          className={style.modal_container}
          autoComplete="off"
        >

          <div className={style.column}>

            {/* HEADER */}
            <div className={style.header_row}>
              <span className={style.header_heading}>
                Post Answer
              </span>
              <span className={style.header_hint}>
                Required fields are marked with *
              </span>
              <span
                className={style.header_closeX}
                role="button"
                tabIndex="0"
                onClick={onClose}
                onKeyPress={onClose}
              >
                <i className="fas fa-times-circle" />
              </span>
            </div>

            {/* ANSWER */}
            <div className={style.answer_row}>
              <label htmlFor="question" className={style.answer_label}>
                Answer*
                <textarea
                  className={style.answer_input}
                  name="question"
                  id="question"
                  placeholder="Answer this question..."
                  onFocus={this.expandForm}
                  // onFocus={console.log('FOCUS!')}
                  // autoFocus="true"
                />
              </label>

              <span className={style.arrow}>
                <i className="fas fa-caret-right" />
              </span>

            </div>

            {/* NAME, LOCATION, EMAIL */}

            {expanded && (
              <div>
                <div className={style.name_location_wrapper}>

                  {/* NAME */}
                  <div className={style.name_row}>
                    <label htmlFor="name" className={style.name_label}>
                      Nickname*
                      <input
                        className={style.name_input}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Examples: Karin-san"
                      />
                    </label>

                    <span className={style.arrow}>
                      <i className="fas fa-caret-right" />
                    </span>

                  </div>

                  <div className={style.location_row}>
                    <label htmlFor="location" className={style.location_label}>
                      Location
                      <input
                        className={style.location_input}
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Example: San Jons, CA"
                        autoComplete="off"
                      />
                    </label>

                    <span className={style.arrow}>
                      <i className="fas fa-caret-right" />
                    </span>

                  </div>

                </div>

                <div className={style.email_row}>
                  <label htmlFor="email" className={style.email_label}>
                    Email*
                    <input
                      className={style.email_input}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Example: ryan@snacKing.com"
                    />
                  </label>

                  <span className={style.arrow}>
                    <i className="fas fa-caret-right" />
                  </span>

                </div>
              </div>
            )}

            {/* AGREE / POST */}
            <div className={style.agree_row}>

              <span className={style.agree_checkbox}>
                <input type="checkbox" name="agree" id="agree" />
                I agree to the terms & conditions
              </span>

              <span className={style.agree_fineprint}>
                You may receive emails regarding this submission. Any emails will
                include the ability to opt-out of future communications.
              </span>

              {/* TODO - MAKE BUTTON SUBMIT INSTEAD OF CLOSE */}
              <span className={style.button}>
                <Button className={style.button} handleAnswer={onClose} />
              </span>

            </div>

          </div>
        </form>

      </div>
    );
  }
}

AnswerForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AnswerForm;
