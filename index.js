const Pokemon = require('./lib/models/Pokemon');

Pokemon
  .insert({ name: 'Charmander', region: 'Kanto', url: 'https://www.pokemon.com/us/pokedex/charmander' })
  .then(console.log);
