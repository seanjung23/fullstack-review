const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index').save;
const findTop = require('../database/index').findTop;

let app = express();

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
// app.use(express.json({  extended: true }));
// app.use(express.urlencoded({  extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getReposByUsername(req.body.username, save);
  res.status(201);
});

app.get('/repos', function (req, res) {
  // console.log('this is req', req);
  // console.log('this is body', req.body);
  // TODO - your code here!
  // This route should send back the top 25 repos
  findTop(req)
  res.sendStatus(200);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

