const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3003;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET all questions
app.get('/questions/:id', cors(), (req, res) => {
  db.getAllQuestions(req.params.id, (err, results) => {
    if (err) {
      res.status(404).send('Error in app.get - getting questions');
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}. \nIs there anybody out there?`);
});
