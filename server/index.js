const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js')

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


