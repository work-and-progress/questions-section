const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/unzwilling', { useNewUrlParser: true, useUnifiedTopology: true });

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

// QUERIES

const QuestionModel = mongoose.model('questions', questionSchema);

const getAllQuestions = function (id, callback) {
  return QuestionModel.find({ product_id: id }).limit(30)
    .then((questions) => callback(null, questions))
    .catch((err) => callback(err));
};

module.exports = {
  getAllQuestions,
};
