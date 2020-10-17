/* eslint-disable max-len */
/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('file-system');
const generateRandomDate = require('./generateRandomDate.js');

const writeAnswers = fs.createWriteStream('../generatedData/products-questions-answers.csv');
writeAnswers.write('product_id,question_id,question_text,question_date,answer_id,answer_text,answer_date,answer_helpful_yes,answer_helpful_no\n', 'utf8');

function writeLotsOfAnswers(writer, encoding, callback) {
  let i = 10; // how many units do you want? End goal is 10 mill
  let product_id = 0;
  let totalCounter = 0; // starts with whatever you set i

  function write() {
    let ok = true;
    do {
      i -= 1;
      product_id += 1;

      const question_max = 10; // 10 questions maximum per product
      const question_min = 0;

      const answer_max = 3; // 3 answers maximum per question
      const answer_min = 0;

      let data = '';
      let question_id = '';
      let question_text = '';
      let question_date = 0;

      let answer_id = '';
      let answer_text = '';
      let answer_date = 0;

      const answer_helpful_max = 10;
      const answer_helpful_min = 0;

      let answer_helpful_yes = 0;
      let answer_helpful_no = 0;

      const randomNumberOfQuestions = Math.floor(Math.random() * (question_max - question_min + 1) + question_min);

      for (let j = 0; j < randomNumberOfQuestions; j += 1) {
        // question_id = faker.random.uuid(); // 1
        question_id = `${product_id}-${j + 1}`;
        question_text = (faker.lorem.sentence()).slice(0, -1); // 2
        question_text += '?';

        question_date = generateRandomDate.generateRandomDateWithinLastThreeMonths();

        const randomNumberOfAnswers = Math.floor(Math.random() * (answer_max - answer_min + 1) + answer_min);
        // console.log('randomNumberOfAnswers: ', randomNumberOfAnswers)
        totalCounter += randomNumberOfAnswers;

        for (let k = 0; k < randomNumberOfAnswers; k += 1) {
          // question_id = faker.random.uuid(); // 1
          answer_id = `${question_id}-${k + 1}`;
          answer_text = (faker.lorem.sentence()).slice(0, -1); // 2
          answer_text += '.';

          answer_date = generateRandomDate.generateRandomDateWithinLastThreeMonths();

          answer_helpful_yes = Math.floor(Math.random() * (answer_helpful_max - answer_helpful_min + 1) + 1);
          answer_helpful_no = Math.floor(Math.random() * (answer_helpful_max - answer_helpful_min + 1) + 1);

          data = `${product_id},${question_id},${question_text},${question_date},${answer_id},${answer_text},${answer_date},${answer_helpful_yes},${answer_helpful_no}\n`;

          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }
      }

      // console.log('Total number of lines written: ', totalCounter); // also works
    } while (i > 0 && ok);

    // When the highWaterMark is reached, the write method of createWriteStream will start returning false.
    console.log('highWaterMark is reached if "ok" is FALSE. ok is ', ok);
    console.log('Total number of lines written so far: ', totalCounter);

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
