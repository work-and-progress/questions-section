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
  const randomDateWithinLastThreeMonths = generateRandomDate(rangeOfNowAndThreeMonthsAgo.start, rangeOfNowAndThreeMonthsAgo.end);
  const dateNow = new Date();

  let differenceInMonths = new Date(dateNow - randomDateWithinLastThreeMonths);
  differenceInMonths = differenceInMonths.getUTCMonth();

  let finalDateValue = '';
  if (differenceInMonths === 0) {
    const diff = new Date(dateNow.getTime() - randomDateWithinLastThreeMonths.getTime());
    const differenceInDays = Math.round(diff / (1000 * 3600 * 24));
    if (differenceInDays === 1) {
      finalDateValue = (`${differenceInDays} day ago`);
    } else if (differenceInDays === 0) {
      const randomHoursAgo = Math.floor(Math.random() * (23 - 2 + 1) + 2);
      finalDateValue = (`${randomHoursAgo} hours ago`);
    } else {
      finalDateValue = (`${differenceInDays} days ago`);
    }
  } else if (differenceInMonths === 1) {
    finalDateValue = (`${differenceInMonths} month ago`);
  } else {
    finalDateValue = (`${differenceInMonths} months ago`);
  }
  return finalDateValue;
}

module.exports = {
  generateRandomDateWithinLastThreeMonths,
};
