const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/users');

const mongoLabKey = require('./keys');

const posts = [{ message: 'Hello 1' }, { message: 'Hello 2' }];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/register', (req, res) => {
  // TODO: validate and sanitize data
  const userData = req.body;
  const user = new User(userData);
  user.save((err, res) => {
    if (err) {
      console.log('error while saving user: ', err)
    }
  })
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.end('Hello from /');
});

mongoose.connect(
  mongoLabKey,
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log('connected to mongo');
    }
  }
);

app.listen(3000);
