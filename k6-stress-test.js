/* eslint-disable max-len */
import http from 'k6/http';
import { sleep } from 'k6';

// Scale the number of request per second: 1, 10, 100, 1K
export const options = {
  stages: [
    // { duration: '1s', target: 1 },
    // { duration: '5m', target: 1 },
    { duration: '1m', target: 10 },
    // { duration: '5m', target: 10 },
    // { duration: '2m', target: 100 },
    // { duration: '5m', target: 100 },
    // { duration: '2m', target: 1000 },
    // { duration: '5m', target: 1000 },
  ],
};
export default function () {
  const url = 'http://localhost:3003/questions';
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  const data = {
    product_id: 7,
    question_text: 'Stress Test 10:00AM Oct 26 2020',
    question_date: '2020-10-22',
    question_user_email: 'karebae@gmail.com',
    question_username: 'karebae',
    question_user_location: 'San Francisco, CA',
  };
  http.post(url, data, { headers });

  // headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  // res = http.post(url, data, { headers: headers });

  // let responses = http.get('http://localhost:3003/questionsAndAnswers/9999999');

  //   url: 'http://localhost:3003/answers',
  //   body: {
  //     product_id: 5,
  //     question_id: '590c70d4-5c1c-43c0-9198-76ad7e01e91d',
  //     answer_text: 'Stress Test 10:00AM Oct 26 2020',
  //     answer_date: '2020-10-22',
  //     answer_user_email: 'karebae@gmail.com',
  //     answer_username: 'karebae',
  //     answer_user_location: 'San Francisco, CA',
  //     answer_helpful_yes: 7,
  //     answer_helpful_no: 7,
  //   },
  //   params: {
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

  sleep(1);
}
