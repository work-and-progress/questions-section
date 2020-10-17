/* eslint-disable max-len */
/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('file-system');

const writeAnswers = fs.createWriteStream('../answers.csv');
writeAnswers.write('product_id,question_id,question_text,question_date\n', 'utf8');

function writeLotsOfAnswers(writer, encoding, callback) {
  let i = 10; // how many units do you want? End goal is 10 mill
  let product_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      product_id += 1;

      const question_max = 10;
      const question_min = 0;

      const answer_max = 10;
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

      // eslint-disable-next-line max-len
      const randomNumberOfQuestions = Math.floor(Math.random() * (question_max - question_min + 1) + 1);

      for (let j = 0; j < randomNumberOfQuestions; j += 1) {
        // question_id = faker.random.uuid(); // 1
        question_id = `${product_id}-${j + 1}`;
        question_text = (faker.lorem.sentence()).slice(0, -1); // 2
        question_text += '?';

        const randomDate = faker.date.past();
        const dateNow = Date.now();
        const diff = new Date(dateNow - randomDate);

        question_date = diff.getUTCMonth(); // 3

        const randomNumberOfAnswers = Math.floor(Math.random() * (answer_max - answer_min + 1) + 1);
        for (let k = 0; k < randomNumberOfAnswers; k += 1) {
          // question_id = faker.random.uuid(); // 1
          answer_id = `${question_id}-${k + 1}`;
          answer_text = (faker.lorem.sentence()).slice(0, -1); // 2
          answer_text += '?';

          const answerRandomDate = faker.date.past();
          const answerDateNow = Date.now();
          const answerDiff = new Date(answerDateNow - answerRandomDate);

          answer_date = answerDiff.getUTCMonth(); // 3

          answer_helpful_yes = Math.floor(Math.random() * (answer_helpful_max - answer_helpful_min + 1) + 1);
          answer_helpful_no = Math.floor(Math.random() * (answer_helpful_max - answer_helpful_min + 1) + 1);

          data = `${product_id},${question_id},${question_text},${question_date} months ago,${answer_id},${answer_text},${answer_date} months ago,${answer_helpful_yes},${answer_helpful_no}\n`;

          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } // very unsure about this logic lol
    } while (i > 0 && ok);
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