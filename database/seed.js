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

// FAKE DATA GENERATORS

var genQuestions = function (numProducts) {
  var questions = [];

  for (let product_id = 0; product_id < numProducts; product_id++) {
    // generate 0-20 questions for the product
    var rnd = Math.floor(20 * Math.random());
    for (let i = 0; i < rnd; i++) {
      questions.push({
        product_id: product_id,
        text: faker.lorem.sentence(),
        date: faker.date.past(),
        user: {
          nickname: faker.internet.userName(),
          email: faker.internet.email(),
          location: faker.address.city() + ', ' + faker.address.stateAbbr()
        },
        answers: [{
          text: faker.lorem.sentence(),
          date: faker.date.past(),
          user: {
            nickname: faker.internet.userName(),
            email: faker.internet.email(),
            location: faker.address.city() + ', ' + faker.address.stateAbbr()
          },
          useful: { yes: faker.random.number({ min: 0, max: 15 }), no: faker.random.number({ min: 0, max: 5 }) }
        }]
      });
    }
  }
  return questions;
};


// INVOKE QUESTION GENERATION AND ADD TO DB

let QuestionModel = mongoose.model('question', questionSchema);

QuestionModel.insertMany(genQuestions(100))
.then(() => {
  console.log('Data written to DB. \nDB Connection Closed.');
  mongoose.connection.close();
})
.catch((err) => console.log(err))
