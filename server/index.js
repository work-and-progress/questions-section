const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());


// GET all questions
app.get('/questions/:id', (req, res) => {

  // REFACTOR THIS TO GET PARAM FROM GET REQUEST
  const id = req.params.id;

  db.getAllQuestions(id, (err, results) => {
    if (err) {
      res.status(404).send('Error in app.get - getting questions');
    } else {
      console.log(results);
      res.status(200).send(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}. Is there anybody out there?`);
});


