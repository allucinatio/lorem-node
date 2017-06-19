const express = require('express');
const app = express();
var paragraphs = 3;
var loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum({
      count: paragraphs
    , units: 'paragraphs'
    , format: 'html'
  });

app.get('/lorem/:paragraphs', function (req, res) {
  paragraphs = req.params.paragraphs;
  output = loremIpsum({
      count: paragraphs
    , units: 'paragraphs'
    , format: 'html'
  });
  res.send(output);
});

app.get('/lorem', function (req, res) {
  res.send(output);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});

// .
