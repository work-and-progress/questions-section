// https://node-postgres.com/
// called pool because there are a pool of connections
const { Pool } = require('pg');
const faker = require('faker');

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
        callback(null, results.rows);
      }
    },

  );
};

const randomQuestionID = faker.random.uuid();
console.log('randomQuestionID', randomQuestionID)
const randomUserID = faker.random.uuid();
console.log('randomUserID', randomUserID)
const postQuestion = (request, callback) => {
  console.log(request)
  const query = `INSERT INTO questions (question_id, product_id, question_text, question_user_id, question_date, question_user_email, question_username, question_user_location) values ('${randomQuestionID}',${request.product_id},'${request.question_text}','${randomUserID}','${request.question_date}','${request.question_user_email}','${request.question_username}','${request.question_user_location}')`;
  console.log(query);
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getQuestions,
  postQuestion,
};
