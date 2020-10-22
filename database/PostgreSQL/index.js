// https://node-postgres.com/

// pool of connections

const { Postgres } = require('pg');
// eslint-disable-next-line prefer-destructuring
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'karinaizawa',
  host: 'localhost',
  database: 'unzwilling',
  password: 'password',
  port: 5432,
});

const getQuestions = (id, callback) => {
  pool.query(
    'SELECT questions.question_id, questions.product_id, questions.question_text, questions.question_date, questions.question_username, answers.answer_id, answers.answer_text, answers.answer_date, answers.answer_username, answers.answer_helpful_yes, answers.answer_helpful_no FROM questions INNER JOIN answers ON questions.question_id = answers.question_id WHERE questions.product_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        // console.log(results.rows);
        callback(null, results.rows);
      }
    },

  );
};

// const postQuestion = (callback) => {
//   pool.query(
//     '',
//     [id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       } else {
//         // console.log(results.rows);
//         callback(null, results.rows);
//       }
//     },

//   );
// };

module.exports = {
  getQuestions,
  // postQuestion,
};
