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

/*--------------------------------------*/
app.get('/questions/:id', cors(), (req, res) => {
  db.getAllQuestionsForOneProduct(req.params.id, (err, results) => {
    if (err) {
      res.status(404).send('Error in app.get - getting questions');
    } else {
      res.status(200).send(results);
    }
  });
});

// Write a question for a specific product. IDs for questions are allocated via _id property
app.post('/questions', (req, res) => {
  db.insertOneQuestionForOneProduct(req.body, (err, response) => {
    if (err) {
      res.status(404).send('Error in app.post - posting question for one product');
    } else {
      res.status(201).send(response);
    }
  });
});

// upating using the question's _id

app.put('/questions/:questionID', (req, res) => {
  db.updateQuestionForOneProduct(req.params.questionID, req.body, (err, response) => {
    if (err) {
      res.status(404).send('Error in app.put - updating question for one product');
    } else {
      res.status(204).send(response);
    }
  });
});

app.delete('/questions/:id', (req, res) => {
  res.send('Got a DELETE request');
});

/*--------------------------------------*/
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
