const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const postgres = require('../database/PostgreSQL/index.js');

const app = express();
const port = 3003;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*--------------------------------------*/
app.get('/questions/:productID', cors(), (req, res) => {
  postgres.getQuestions(req.params.productID, (err, results) => {
    if (err) {
      res.status(404).send('Error in app.get - getting questions');
    } else {
      res.status(200).send(results);
    }
  });
});

/*--------------------------------------*/
app.listen(port, () => {
  console.log(`Server for PostgreSQL listening on port ${port}`);
});
