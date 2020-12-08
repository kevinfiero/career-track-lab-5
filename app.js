const Pokemon = require('./lib/models/Pokemon');
const State = require('./lib/models/State');

// Pokemon
//   .insert({ name: 'Charmander', region: 'Kanto', url: 'https://www.pokemon.com/us/pokedex/charmander' })
//   .then(console.log);

// Pokemon
//   .insert({ name: 'Bulbasaur', region: 'Kanto', url: 'https://www.pokemon.com/us/pokedex/bulbasaur' })
//   .then(console.log);

// Pokemon
//   .insert({ name: 'Squirtle', region: 'Kanto', url: 'https://www.pokemon.com/us/pokedex/squirtle' })
//   .then(console.log);

// Pokemon
//   .find()
//   .then(console.log);

  
// Pokemon
//   .delete(2)
//   .then(console.log);

// Pokemon
//   .update(2, { name: 'Zapdos', region: 'Kanto', url: 'https://www.pokemon.com/us/pokedex/zapdos' })
//   .then(console.log);

State
  .insert({ state: 'New York', capital: 'Albany', url: 'https://en.wikipedia.org/wiki/New_York_(state)' })
  .then(console.log);

