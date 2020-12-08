const Pokemon = require('./lib/models/Pokemon');
const State = require('./lib/models/State');
const Furniture = require('./lib/models/Furniture');
const Console = require('./lib/models/Console');
const Coffee = require('./lib/models/Coffee');

// Manually testing using the below commented sections

//Pokemon

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
//   .findById(1)
//   .then(console.log);

// Pokemon
//   .delete(2)
//   .then(console.log);

// Pokemon
//   .update(3, { name: 'Zapdos', region: 'Kanto', url: 'https://www.pokemon.com/us/pokedex/zapdos' })
//   .then(console.log);

// Pokemon
//   .find()
//   .then(console.log);

//State

// State
//   .insert({ state: 'New York', capital: 'Albany', url: 'https://en.wikipedia.org/wiki/New_York_(state)' })
//   .then(console.log);

// State
//   .insert({ state: 'Michigan', capital: 'Lansing', url: 'https://en.wikipedia.org/wiki/Michigan' })
//   .then(console.log);

// State
//   .insert({ state: 'Texas', capital: 'Dallas', url: 'https://en.wikipedia.org/wiki/Colorado' })
//   .then(console.log);

// State
//   .find()
//   .then(console.log);

// State
//   .findById(1)
//   .then(console.log);

// State
//   .delete(2)
//   .then(console.log);

// State
//   .update(3, { state: 'Texas', capital: 'Austin', url: 'https://en.wikipedia.org/wiki/Texas' })
//   .then(console.log);

// State
//   .find()
//   .then(console.log);

//Furniture

// Furniture
//   .insert({ furniture: 'chair', constructionMaterial: 'wood', primaryColor: 'brown' })
//   .then(console.log);

// Furniture
//   .insert({ furniture: 'desk', constructionMaterial: 'metal', primaryColor: 'metallic' })
//   .then(console.log);

// Furniture
//   .insert({ furniture: 'side table', constructionMaterial: 'mixed', primaryColor: 'orange' })
//   .then(console.log);

// Furniture
//   .find()
//   .then(console.log);

// Furniture
//   .findById(1)
//   .then(console.log);

// Furniture
//   .delete(2)
//   .then(console.log);

// Furniture
//   .update(3, { furniture: 'side table', constructionMaterial: 'mixed', primaryColor: 'green' })
//   .then(console.log);

// Furniture
//   .find()
//   .then(console.log);

//Console

// Console
//   .insert({ console: 'Switch', company: 'Nintendo', countryHQ: 'Japan', yearlySales: 5000000 })
//   .then(console.log);

// Console
//   .insert({ console: 'XBOX', company: 'Microsoft', countryHQ: 'US', yearlySales: 6000000 })
//   .then(console.log);

// Console
//   .insert({ console: 'Playstation', company: 'Sony', countryHQ: 'Mexico', yearlySales: 0 })
//   .then(console.log);

// Console
//   .find()
//   .then(console.log);

// Console
//   .findById(1)
//   .then(console.log);

// Console
//   .delete(2)
//   .then(console.log);

// Console
//   .update(3, { console: 'Playstation', company: 'Sony', countryHQ: 'US', yearlySales: 7000000 })
//   .then(console.log);

// Console
//   .find()
//   .then(console.log);


//Coffee

// Coffee
//   .insert({ coffee: 'Blonde Roast', company: 'Starbucks', hot: true, yearlySales: 5000000 })
//   .then(console.log);

// Coffee
//   .insert({ coffee: 'Hair Bender', company: 'Stumptown', hot: false, yearlySales: 60000 })
//   .then(console.log);

// Coffee
//   .insert({ coffee: 'Nitro Cold Brew', company: 'a', hot: true, yearlySales: 0 })
//   .then(console.log);

// Coffee
//   .find()
//   .then(console.log);

// Coffee
//   .findById(1)
//   .then(console.log);

// Coffee
//   .delete(2)
//   .then(console.log);

// Coffee
//   .update(3, { coffee: 'Nitro Cold Brew', company: 'Lucky Jack', hot: false, yearlySales: 9000000 })
//   .then(console.log);

// Coffee
//   .find()
//   .then(console.log);