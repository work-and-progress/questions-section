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

const getQuestionAndAnswers = (id, callback) => {
  const getQuery = `SELECT questions.question_id, questions.product_id, questions.question_text, questions.question_date, questions.question_username, answers.answer_id, answers.answer_text, answers.answer_date, answers.answer_username, answers.answer_helpful_yes, answers.answer_helpful_no FROM questions INNER JOIN answers ON questions.question_id = answers.question_id WHERE questions.product_id = ${id}`;
  pool.query(getQuery, (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results.rows);
    }
  });
};

const getQuestions = (id, callback) => {
  const getQuery = `SELECT questions.question_id, questions.product_id, questions.question_text, questions.question_date, questions.question_username FROM questions WHERE questions.product_id = ${id}`;
  pool.query(getQuery, (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results.rows);
    }
  });
};

const getAnswers = (id, callback) => {
  const getQuery = `SELECT answer_id, product_id, question_id, answer_text, answer_date, answer_user_id, answer_user_email, answer_username, answer_user_location, answer_helpful_yes, answer_helpful_no FROM answers WHERE product_id = ${id}`;
  pool.query(getQuery, (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results.rows);
    }
  });
};

const postQuestion = (request, callback) => {
  const query = `INSERT INTO questions (question_id, product_id, question_text, question_user_id, question_date, question_user_email, question_username, question_user_location) values ('${faker.random.uuid()}',${request.product_id},'${request.question_text}','${faker.random.uuid()}','${request.question_date}','${request.question_user_email}','${request.question_username}','${request.question_user_location}')`;
  pool.query(query, (error, results) => {
    // console.log(query);
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

const postAnswer = (request, callback) => {
  const query = `INSERT INTO answers (answer_id, product_id, question_id, answer_text, answer_date, answer_user_id, answer_user_email, answer_username, answer_user_location, answer_helpful_yes, answer_helpful_no) values
  ('${faker.random.uuid()}','${request.product_id}','${request.question_id}','${request.answer_text}','${request.answer_date}','${faker.random.uuid()}','${request.answer_user_email}','${request.answer_username}','${request.answer_user_location}','${request.answer_helpful_yes}','${request.answer_helpful_no}')`;
  pool.query(query, (error, results) => {
    // console.log(query);
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getQuestionAndAnswers,
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
};
