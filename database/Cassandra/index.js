/* eslint-disable max-len */
const cassandra = require('cassandra-driver');
const faker = require('faker');

// https://www.npmjs.com/package/cassandra-driver

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'unzwilling_questions',
});

const getQuery = 'SELECT product_id, question_date, question_id, question_text, question_username, answer_id, answer_text, answer_date, answer_username, answer_helpful_yes, answer_helpful_no FROM unzwilling_questions.questions_by_product_id where product_id = ? order by question_date desc';

const getQuestions = (id, callback) => {
  client.execute(
    'SELECT product_id, question_date, question_id, question_text, question_username, answer_id, answer_text, answer_date, answer_username, answer_helpful_yes, answer_helpful_no FROM unzwilling_questions.questions_by_product_id where product_id = ? order by question_date desc',
    [id], { prepare: true }, (error, results) => {
      if (error) {
        throw error;
      } else {
        callback(null, results.rows);
      }
    },
  );
};

const randomID = faker.random.uuid();
const postQuestion = (request, callback) => {
  client.execute(
    'INSERT INTO unzwilling_questions.questions_by_product_id (product_id, question_date, question_id, question_text, question_username, answer_id, answer_text, answer_date, answer_username, answer_helpful_yes, answer_helpful_no) values (?, ?, ?, ?)',
    [request.product_id,
      request.question_date,
      request.question_text,
      request.question_username],
    { prepare: true }, (error, results) => {
      console.log(request)
      if (error) {
        throw error;
      } else {
        callback(null, results);
      }
    },
  );
};

module.exports = {
  getQuestions,
  postQuestion,
};
