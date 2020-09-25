var faker = require('faker');

// generate multiple questions for each of 100 product_id's
var genFakeQuestions = (count) => {
  var questions = [];
  for (let product_id = 0; product_id < count; product_id++) {
    // generate 0-20 questions for the product
    var rnd = Math.floor(20 * Math.random());
    for (let i = 0; i < rnd; i++) {
      questions.push({
        product_id: product_id,
        text: faker.lorem.sentence(),
        date: faker.date.past(),
        user: {
          nickname: faker.internet.userName(),
          email: faker.internet.email()
        }
      });
    }
  }
  return questions;
};


// // get all questions from db ?
// var questions
// for (let i = 0; i < question; i++) {
//     // generate 0-10 answers for each question
//     question_id: Number,
//     text: faker.lorem.sentence(),
//     date: faker.date.past(),
//     user: {
//       nickname: faker.internet.userName(),
//       email: faker.internet.email()
//     },
//     useful: {
//       yes: faker.random.number({ min: 0, max: 10 }),
//       no: faker.random.number({ min: 0, max: 4 })
//     }
//     // generate a user
//     // generate a user
// }

// let fakeUser = {
//   nickname: faker.internet.userName(),
//   email: faker.internet.email()
// };

// let fakeQuestion = {
//   product_id: Number,
//   text: faker.random.sentence(),
//   date: faker.date.past(),
//   user: {
//     nickname: faker.internet.userName(),
//     email: faker.internet.email()
//   },
//   answers: [],
// };

// let fakeAnswer {
//   question_id: Number,
//   text: faker.random.sentence(),
//   date: faker.date.past(),
//   user: {
//     nickname: faker.internet.userName(),
//     email: faker.internet.email()
//   },
//   useful: {
//     yes: faker.random.number({ min: 0, max: 10 }),
//     no: faker.random.number({ min: 0, max: 4 })
//   }
// };

module.exports = {
  genFakeQuestions
}