const Pokemon = require('./lib/models/Pokemon');
const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());


app.post('/pokemon', async(req, res) => {
  const pokemon = await Pokemon.insert(req.body);
  res.send(pokemon);
});

module.exports = app;