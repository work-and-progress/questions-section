const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unzwilling', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

let userSchema = new mongoose.Schema({
  nickname: String,
  email: String,
  location: String
});

let Users = mongoose.model('Users', userSchema);

let answerSchema = mongoose.Schema({
  text: String,
  date: Date,
  user: userSchema,
  useful: { yes: Number, no: Number }
});

let questionSchema = mongoose.Schema({
  product_id: String,
  text: String,
  date: Date,
  user: userSchema,
  answers: [answerSchema]
});

let Questions = mongoose.model('Questions', questionSchema);

let testUser = new Users ({
  nickname: 'Spongebob',
  location: 'Bikini Bottom',
  email: 'spongebob@bikinibottom.com'
});

let testAnswer = {
  text: 'First Answer',
  date: new Date(),
  user: testUser,
};

let testQuestion = new Questions({
  text: 'First Question!',
  date: new Date(),
  user: testUser,
  answers: [testAnswer, testAnswer]
});

testQuestion.save((err) => {
  if (err) return console.log(err);
});


// ---------------------


var mdbRepos = ghRepos.map( ghRepo => {
  return {
      id: ghRepo.id,
      name: ghRepo.name,
      full_name: ghRepo.full_name,
      owner: ghRepo.owner.login,
      git_url: ghRepo.git_url,
      description: ghRepo.description,
      stargazers_count: ghRepo.stargazers_count,
      watchers_count: ghRepo.watchers_count
  };
});

// insert mongofied list into mongodb
Repo.insertMany(mdbRepos)
.then( () => "Success: List inserted in database" )
.catch( (err) => console.log('Error inserting list into database') );



// let Answers = mongoose.model('Answers', answerSchema);

// test for db insertions

// let testUser = new Users({
//   nickname: 'Spongebob',
//   location: 'Bikini Bottom',
//   email: 'spongebob@bikinibottom.com'
// });

// testUser.save((err) => {
//   if (err) return console.log(err);
// });


// let testQuestion = new Questions({
//   text: 'First Question!',
//   date: new Date(),
//   user: testUser,
//   answers: [testUser, testUser]
// });

// testQuestion.save((err) => {
//   if (err) return console.log(err);
// });


// let testAnswer = new Answers({
//   text: 'First Answer',
//   date: new Date(),
//   user: testUser,
// });

// testAnswer.save((err) => {
//   if (err) return console.log(err);
// });

const seed = require('./seed.js');

const test = seed.genQuestions(100);

console.log('FAKE QUESTION TEST');
console.log(test);