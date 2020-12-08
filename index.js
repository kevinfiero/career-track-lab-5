const Pokemon = require('./lib/models/Pokemon');
const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());


app.post('/pokemon', async(req, res) => {
  const pokemon = await Pokemon.insert(req.body);
  res.send(pokemon);
});

app.get('/pokemon', async(req, res) => {
  const pokemon = await Pokemon.find(req.body);
  res.send(pokemon);
});

app.get('/pokemon/:id', async(req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);
  res.send(pokemon);
});

app.delete('/pokemon/:id', async(req, res) => {
  const pokemon = await Pokemon.delete(req.params.id);
  res.send(pokemon);
});

app.put('/pokemon/:id', async(req, res) => {
  const pokemon = await Pokemon.update(req.params.id, req.body);
  res.send(pokemon);
});

module.exports = app;
