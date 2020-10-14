const mongoose = require('mongoose');

// mongoose.connect('mongodb://host.docker.internal:27017/unZwilling-questions', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/unZwilling-questions', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://database/unZwilling-questions', { useNewUrlParser: true, useUnifiedTopology: true });

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

/* ------------------ QUERY FUNCTIONS ------------------ */

const QuestionModel = mongoose.model('questions', questionSchema);

// eslint-disable-next-line max-len
const getAllQuestionsForOneProduct = (id, callback) => QuestionModel.find({ product_id: id }).limit(30)
  .then((questions) => callback(null, questions))
  .catch((err) => callback(err));

/*
"response" should be:
{
   "acknowledged" : true,
   "insertedId" : ObjectId("56fc40f9d735c28df206d078")
}
*/
const insertOneQuestionForOneProduct = (question, callback) => {
  console.log('got your question! ', question);
  return QuestionModel.create(question)
    .then((response) => callback(null, response))
    .catch((err) => callback(err));
};






/*----------------------------------------------*/
module.exports = {
  getAllQuestionsForOneProduct,
  insertOneQuestionForOneProduct,
};
