const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefcards = require('./data/chefcards.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('dragon is coming');
});

app.get('/chefdetails', (req, res) => {
  res.send(chefdetails);
});

app.get('/chefcards', (req, res) => {
  res.send(chefcards);
});

app.get('/chefcards/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedrecipe = chefcards.find((n) => n.id == id);
  res.send(selectedrecipe);
});

app.listen(port, () => {
  console.log(`Dragon is running: ${port}`);
});
