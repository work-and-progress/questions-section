/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('file-system');

const writeQuestions = fs.createWriteStream('../questions.csv');
writeQuestions.write('product_id,question_id,question_text,question_date\n', 'utf8');

function writeLotsOfQuestions(writer, encoding, callback) {
  let i = 10; // how many units do you want? End goal is 10 mill
  let product_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      product_id += 1;

      const max = 10;
      const min = 0;

      let data = '';
      let question_id = '';
      let question_text = '';
      let question_date = 0;

      const randomNumerOfquestions = Math.floor(Math.random() * (max - min + 1) + 1);

      for (let j = 0; j < randomNumerOfquestions; j += 1) {
        // question_id = faker.random.uuid(); // 1
        question_id = `${product_id}-${j + 1}`;
        question_text = (faker.lorem.sentence()).slice(0, -1); // 2
        question_text += '?';

        const randomDate = faker.date.past();
        const dateNow = Date.now();
        const diff = new Date(dateNow - randomDate);

        question_date = diff.getUTCMonth(); // 3
        data = `${product_id},${question_id},${question_text},${question_date} months ago\n`;

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
writeLotsOfQuestions(writeQuestions, 'utf-8', () => {
  writeQuestions.end();
});
