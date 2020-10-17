/* eslint-disable camelcase */
const faker = require('faker');
const moment = require('moment');
const { extendMoment } = require('moment-range');
const momentRange = extendMoment(moment);

// let now = moment();
// let threeMonthsBeforeNow = moment().subtract(3, 'months').calendar();
// const range = momentRange.range(now, threeMonthsBeforeNow);

// console.log(range);

const interval = 'month';
const count = -3;

const range1 = moment.rangeFromInterval(interval, count);

function generateRandomDate(start, end) {
  return new Date(start + Math.random() * (end - start));
}
console.log(generateRandomDate(range1.start, range1.end));


// const fs = require('file-system');

// const writeProducts = fs.createWriteStream('../generatedData/products.csv');
// writeProducts.write('product_id\n', 'utf8');

// function writeTenMillionProducts(writer, encoding, callback) {
//   let i = 100; // how many units do you want? End goal is 10 mill
//   let product_id = 0;

//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       product_id += 1;

//       const data = `${product_id}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// /* -------------------- Invocation ------------------- */
// writeTenMillionProducts(writeProducts, 'utf-8', () => {
//   writeProducts.end();
// });
