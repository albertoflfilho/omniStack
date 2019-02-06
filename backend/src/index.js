const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://backend:backend123@ds117539.mlab.com:17539/backend',
  {
    useNewUrlParser: true,
  }
);

app.get('/', (req, res) => {
  return res.send('Node Express here!');
});

app.listen(3000, () => {
  console.log(' -> Server started on port 3000');
});
