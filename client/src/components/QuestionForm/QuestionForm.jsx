import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

import style from './QuestionForm.css';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleAsk = this.handleAsk.bind(this);
  }

  handleAsk() {
    this.setState();
  }

  render() {
    const { show, onClose } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className={style.backdrop}>
        <form
          className={style.modal_container}
          autoComplete="off"
        >

          <div className={style.left_col}>
            <img className={style.product_image} src="media/product_1.jpg" alt="blender" />

            <span className={style.product_label}>unZWILLING -  eFenergy BFB-3000 Blender</span>
          </div>

          <div className={style.right_col}>

            {/* HEADER */}
            <div className={style.header_row}>
              <span className={style.header_heading}>
                Ask a Question
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

            {/* QUESTION */}
            <div className={style.question_row}>
              <label htmlFor="question" className={style.question_label}>
                Question* Maximum of 255 characters.
                <textarea
                  className={style.question_input}
                  name="question"
                  id="question"
                  placeholder="Why git no like me? -- Rick"
                  // autoFocus="true"
                />
              </label>

              <span className={style.arrow}>
                <i className="fas fa-caret-right" />
              </span>

            </div>

            {/* NAME and LOCATION */}
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

              {/* LOCATION */}
              <div className={style.location_row}>
                <label htmlFor="location" className={style.location_label}>
                  Location
                  <input
                    className={style.location_input}
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Example: Jon's Dojo, CA"
                    autoComplete="off"
                  />
                </label>

                <span className={style.arrow}>
                  <i className="fas fa-caret-right" />
                </span>

              </div>

            </div>

            {/* EMAIL */}
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
                <Button className={style.button} handleAsk={onClose} />
              </span>

            </div>

          </div>
        </form>

      </div>
    );
  }
}

QuestionForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuestionForm;
