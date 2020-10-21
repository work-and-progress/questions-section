/* eslint-disable camelcase */
const moment = require('moment');
const { extendMoment } = require('moment-range');

// eslint-disable-next-line no-unused-vars
const momentRange = extendMoment(moment);

// eslint-disable-next-line no-unused-vars
function generateRandomDateWithinLastThreeMonths() {
  function generateRandomDate(start, end) {
    const randomDate = new Date(start + Math.random() * (end - start));
    return randomDate;
  }

  const interval = 'month';
  const count = -3;
  const rangeOfNowAndThreeMonthsAgo = moment.rangeFromInterval(interval, count);

  // eslint-disable-next-line max-len
  let randomDateWithinLastThreeMonths = generateRandomDate(rangeOfNowAndThreeMonthsAgo.start, rangeOfNowAndThreeMonthsAgo.end);
  randomDateWithinLastThreeMonths = randomDateWithinLastThreeMonths.toISOString().split("T")[0];
  return (randomDateWithinLastThreeMonths);
}

// console.log(generateRandomDateWithinLastThreeMonths());

module.exports = {
  generateRandomDateWithinLastThreeMonths,
};
