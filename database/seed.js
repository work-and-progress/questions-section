const faker = require('faker');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://host.docker.internal:27017/unZwilling-questions', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://database/unZwilling-questions', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.dropDatabase(); // Clear existing database

// SCHEMAs

const userSchema = new mongoose.Schema({
  nickname: String,
  email: String,
  location: String,
});

const answerSchema = new mongoose.Schema({
  text: String,
  date: Date,
  user: userSchema, // subdoc
  useful: { yes: Number, no: Number },
});

const questionSchema = new mongoose.Schema({
  product_id: String,
  text: String,
  date: Date,
  user: userSchema,
  answers: [answerSchema], // subdoc
});

// GENERATE FAKE DATA

const genAnswers = function (min = 1, max) {
  const answers = [];

  const rnd = Math.floor(Math.random() * (max - min + 1) + min);
  for (let n = 0; n < rnd; n += 1) {
    answers.push({
      text: faker.lorem.sentence(),
      date: faker.date.past(),
      user: {
        nickname: faker.internet.userName(),
        email: faker.internet.email(),
        location: `{${faker.address.city()}, ${faker.address.stateAbbr()}`,
      },
      useful: {
        yes: faker.random.number({ min: 0, max: 15 }),
        no: faker.random.number({ min: 0, max: 5 }),
      },
    });
  }
  return answers;
};

const genQuestions = function (min, max) {
  const numProducts = 100;
  const questions = [];

  for (let productId = 0; productId < numProducts; productId += 1) {
    const rnd = Math.floor(Math.random() * (max - min + 1) + 1);
    for (let i = 0; i < rnd; i += 1) {
      questions.push({
        product_id: productId,
        text: faker.lorem.sentence(),
        date: faker.date.past(),
        user: {
          nickname: faker.internet.userName(),
          email: faker.internet.email(),
          location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
        },
        answers: genAnswers(0, 15),
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
  .catch((err) => console.log(err));
