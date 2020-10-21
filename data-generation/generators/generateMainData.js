/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('file-system');
const generateRandomDate = require('./generateRandomDate.js');

// const writeAnswers = fs.createWriteStream('../generatedData/main.csv');
const writeAnswers = fs.createWriteStream('../generatedData/smaller.csv');
writeAnswers.write('product_id,question_id,question_text,question_date,question_user_id,question_user_email,question_username,question_user_location,answer_id,answer_text,answer_date,answer_user_id,answer_user_email,answer_username,answer_user_location,answer_helpful_yes,answer_helpful_no\n', 'utf8');

function writeLotsOfAnswers(writer, encoding, callback) {
  let i = 10; // amount of total products
  // let i = 10; // TEST
  let product_id = 0;
  let totalCounter = 0; // starts with whatever you set i

  function write() {
    let ok = true;
    do {
      i -= 1;
      product_id += 1;
      // console.log('product_id', product_id);

      const answer_max = 2; // 3 answers maximum per question
      const answer_min = 1;

      const question_max = 4; // 10 questions maximum per product
      const question_min = 1;

      let data = '';
      let question_id = '';
      let question_text = '';
      let question_date = 0;

      let question_user_id = '';
      let question_user_email = '';
      let question_user_username = '';
      let question_user_location = '';

      let answer_id = '';
      let answer_text = '';
      let answer_date = 0;

      let answer_user_id = '';
      let answer_user_email = '';
      let answer_user_username = '';
      let answer_user_location = '';

      const answer_helpful_max = 10;
      const answer_helpful_min = 0;

      let answer_helpful_yes = 0;
      let answer_helpful_no = 0;

      const randomNumberOfQuestions = Math.floor(Math.random() * (question_max - question_min + 1) + question_min);

      // don't insert product id if there are no questions
      // if (randomNumberOfQuestions === 0) {
      //   data = `${product_id}\n`;
      //   writer.write(data, encoding);
      // }

      for (let j = 0; j < randomNumberOfQuestions; j += 1) {
        // question_id = `${product_id}-${j + 1}`;
        question_id = faker.random.uuid();

        question_text = (faker.lorem.sentence()).slice(0, -1); // 2
        question_text += '?';
        question_date = generateRandomDate.generateRandomDateWithinLastThreeMonths();

        question_user_id = faker.random.uuid();
        const preModifiedQuestionUserEmail = faker.internet.email();
        question_user_email = preModifiedQuestionUserEmail.toLowerCase();
        question_user_username = preModifiedQuestionUserEmail.split('@')[0];
        question_user_location = `${faker.address.city()}, ${faker.address.stateAbbr()}`;

        const randomNumberOfAnswers = Math.floor(Math.random() * (answer_max - answer_min + 1) + answer_min);
        if (randomNumberOfAnswers === 0) {
          data = `${product_id},${question_id},${question_text},${question_date},${question_user_id},${question_user_email},${question_user_username},"${question_user_location}"\n`;
          writer.write(data, encoding);
        }

        for (let k = 0; k < randomNumberOfAnswers; k += 1) {
          // answer_id = `${question_id}-${k + 1}`;
          answer_id = faker.random.uuid();

          answer_text = (faker.lorem.sentence()).slice(0, -1); // 2
          answer_text += '.';
          answer_date = generateRandomDate.generateRandomDateWithinLastThreeMonths();

          answer_user_id = faker.random.uuid();
          const preModifiedAnswerUserEmail = faker.internet.email();
          answer_user_email = preModifiedAnswerUserEmail.toLowerCase();
          answer_user_username = preModifiedAnswerUserEmail.split('@')[0];
          answer_user_location = `${faker.address.city()}, ${faker.address.stateAbbr()}`;

          answer_helpful_yes = Math.floor(Math.random() * (answer_helpful_max - answer_helpful_min + 1) + 1);
          answer_helpful_no = Math.floor(Math.random() * (answer_helpful_max - answer_helpful_min + 1) + 1);

          data = `${product_id},${question_id},${question_text},${question_date},${question_user_id},${question_user_email},${question_user_username},"${question_user_location}",${answer_id},${answer_text},${answer_date},${answer_user_id},${answer_user_email},${answer_user_username},"${answer_user_location}",${answer_helpful_yes},${answer_helpful_no}\n`;

          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            // see if we should continue, or wait
            // don't pass the callback, because we're not done yet.
            ok = writer.write(data, encoding);
          }
        }
        totalCounter += randomNumberOfAnswers;
      }
    } while (i > 0 && ok);

    // When the highWaterMark is reached, the write method of createWriteStream will start returning false.
    // console.log('highWaterMark is reached if "ok" is FALSE. ok is ', ok);
    console.log(totalCounter);

    // had to stop early!
    // write some more once it drains
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

/* -------------------- Invocation ------------------- */
writeLotsOfAnswers(writeAnswers, 'utf-8', () => {
  writeAnswers.end();
});
