const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});

const express = require('express');
const app = express();

app.listen(8080);
console.log(`Web service listening on port 8080`);

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});