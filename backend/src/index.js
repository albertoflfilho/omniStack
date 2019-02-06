const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Node Express here!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
