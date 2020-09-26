const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unzwilling', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.dropDatabase(); // Clear existing database

// SCHEMAs

let userSchema = new mongoose.Schema({
  nickname: String,
  email: String,
  location: String
});

let answerSchema = new mongoose.Schema({
  text: String,
  date: Date,
  user: userSchema, // subdoc
  useful: { yes: Number, no: Number }
});

let questionSchema = new mongoose.Schema({
  product_id: String,
  text: String,
  date: Date,
  user: userSchema,
  answers: [answerSchema] // subdoc
});

// GENERATE FAKE DATA

var genAnswers = function (min = 1, max) {
  var answers = [];

  var rnd = Math.floor(Math.random() * (max - min + 1) + min);
  for (let n = 0; n < rnd; n++) {
    answers.push({
      text: faker.lorem.sentence(),
      date: faker.date.past(),
      user: {
        nickname: faker.internet.userName(),
        email: faker.internet.email(),
        location: faker.address.city() + ', ' + faker.address.stateAbbr()
      },
      useful: { yes: faker.random.number({ min: 0, max: 15 }), no: faker.random.number({ min: 0, max: 5 }) }
    });
  }
  return answers;
};

var genQuestions = function (min, max) {
  const numProducts = 100;
  var questions = [];

  for (let product_id = 0; product_id < numProducts; product_id++) {

    var rnd = Math.floor(Math.random() * (max - min + 1) + 1);
    for (let i = 0; i < rnd; i++) {
      questions.push({
        product_id: product_id,
        text: faker.lorem.sentence() + ' Why so angry?',
        date: faker.date.past(),
        user: {
          nickname: faker.internet.userName(),
          email: faker.internet.email(),
          location: faker.address.city() + ', ' + faker.address.stateAbbr()
        },
        answers: genAnswers(0, 15)
      });
    }
  }
  return questions;
};

// INSERT FAKE DATA INTO DB

const QuestionModel = mongoose.model('question', questionSchema);

const questionList = genQuestions(0, 15);

QuestionModel.insertMany(questionList)
.then(() => {
  console.log('Data written to DB. \nDB Connection Closed.');
  mongoose.connection.close();
})
.catch((err) => console.log(err))

