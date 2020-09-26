const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unzwilling', {useNewUrlParser: true, useUnifiedTopology: true});

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

// QUERIES

const QuestionModel = mongoose.model('questions', questionSchema);

const getAllQuestions = function (callback) {
  return QuestionModel.find({product_id: 1}).limit(25)
  .then(questions => callback(null, questions))
  .catch(err => callback(err));
};

module.exports = {
  getAllQuestions
}
