/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('file-system');

const writeQuestions = fs.createWriteStream('questions.csv');
writeQuestions.write('product_id,question_id,question_text,question_date\n', 'utf8');

function writeTenMillionReviews(writer, encoding, callback) {
  let i = 100; // how many units do you want? End goal is 10 mill
  let product_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      product_id += 1;

      const max = 10;
      const min = 1;

      let data = '';
      let review_id = '';
      let review_text = '';
      let review_date = 0;

      const randomNumerOfReviews = Math.floor(Math.random() * (max - min + 1) + 1);
      for (let j = 0; j < randomNumerOfReviews; j += 1) {
        review_id = faker.random.uuid(); // 1
        review_text = faker.lorem.sentence(); // 2

        const randomDate = faker.date.past();
        const dateNow = Date.now();
        const diff = new Date(dateNow - randomDate);

        review_date = diff.getUTCMonth(); // 3
      }

      data = `${product_id},${review_id},${review_text},${review_date} months ago\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

/* -------------------- Invocation ------------------- */
writeTenMillionReviews(writeQuestions, 'utf-8', () => {
  writeQuestions.end();
});
