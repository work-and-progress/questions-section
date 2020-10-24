import http from 'k6/http';
import { sleep } from 'k6';

// Scale the number of request per second: 1, 10, 100, 1K
export const options = {
  stages: [
    // { duration: '10s', target: 5 }, // below normal load
    { duration: '2m', target: 1 },
    { duration: '5m', target: 1 },
    { duration: '2m', target: 10 },
    { duration: '5m', target: 10 },
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 1000 },
    { duration: '5m', target: 1000 },
  ],
};
export default function () {
  // const BASE_URL = 'https://localhost:3003'; // make sure this is not production
  let responses = http.get('http://localhost:3003/questionsAndAnswers/9999999');
  // let responses = http.batch([
  //   [
  //     'GET',
  //     `https://localhost:3003/questionsAndAnswers/1`,
  //     // null,
  //     // { tags: { name: 'LocalhostTest' } },
  //   ],
  //   // [
  //   //   'GET',
  //   //   `${BASE_URL}/public/crocodiles/2/`,
  //   //   null,
  //   //   { tags: { name: 'PublicCrocs' } },
  //   // ],
  //   // [
  //   //   'GET',
  //   //   `${BASE_URL}/public/crocodiles/3/`,
  //   //   null,
  //   //   { tags: { name: 'PublicCrocs' } },
  //   // ],
  //   // [
  //   //   'GET',
  //   //   `${BASE_URL}/public/crocodiles/4/`,
  //   //   null,
  //   //   { tags: { name: 'PublicCrocs' } },
  //   // ],
  // ]);

  sleep(1);
}

