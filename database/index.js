const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unzwilling', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

let userSchema = new mongoose.Schema({
  nickname: String,
  email: String,
  location: String
});


let Users = mongoose.model('Users', userSchema);

let questionSchema = mongoose.Schema({
  product_id: String,
  text: String,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  answers: []
});

let Questions = mongoose.model('Questions', questionSchema);

let answerSchema = mongoose.Schema({
  question_id: String,
  text: String,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  useful: {
    yes: Number,
    no: Number
  }
});

let Answers = mongoose.model('Answers', answerSchema);

// test for db insertions

let testUser = new Users({
  nickname: 'Spongebob',
  location: 'Bikini Bottom',
  email: 'spongebob@bikinibottom.com'
});

testUser.save((err) => {
  if (err) return console.log(err);
});


let testQuestion = new Questions({
  text: 'First Question!',
  date: new Date(),
  user: testUser,
  answers: [testUser, testUser]
});

testQuestion.save((err) => {
  if (err) return console.log(err);
});


let testAnswer = new Answers({
  text: 'First Answer',
  date: new Date(),
  user: testUser,
});

testAnswer.save((err) => {
  if (err) return console.log(err);
});

const fakeData = require('./fakeDataGenerator.js');

const test = fakeData.genFakeQuestions(100);

console.log('FAKE QUESTION TEST');
console.log(test);