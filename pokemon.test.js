require('dotenv').config();
const fakeRequest = require('supertest');
const index = require('./index');
const { execSync } = require('child_process');
const client = require('./lib/utils/pool');

describe('test Pokemon model', () => {

  // need to manually run 'npm run drop-tables' then 'npm run create tables' currently
  // can't figure out how to run these scripts. They work in command line...
  // beforeAll(async done => {
  //   execSync('npm run setup-tables');
  //   client.connect();
  //   return done();
  // });

  // afterAll(done => {
  //   return client.end(done);
  // });


  it('insert Pokemon Moltres', async() => {
    const newPokemon = {
      name: 'Moltres',
      region: 'Kanto',
      url: 'https://www.pokemon.com/us/pokedex/moltres'
    };

    const expectation = { 'id': '1',
      'name': 'Moltres',
      'region': 'Kanto',
      'url': 'https://www.pokemon.com/us/pokedex/moltres' };

    const data = await fakeRequest(index)
      .post('/pokemon')
      .send(newPokemon)
      .expect(200);

    expect(expectation).toEqual(data.body);

  });

  it('insert Pokemon Articuno', async() => {
    const newPokemon = {
      name: 'Articuno',
      region: 'Kanto',
      url: 'https://www.pokemon.com/us/pokedex/articuno'
    };

    const expectation = { 'id': '2',
      'name': 'Articuno',
      'region': 'Kanto',
      'url': 'https://www.pokemon.com/us/pokedex/articuno' };

    const data = await fakeRequest(index)
      .post('/pokemon')
      .send(newPokemon)
      .expect(200);

    expect(expectation).toEqual(data.body);

  });

  it('get all Pokemon', async() => {

    const expectation = [
      { 'id': '1',
        'name': 'Moltres',
        'region': 'Kanto',
        'url': 'https://www.pokemon.com/us/pokedex/moltres' },
      { 'id': '2',
        'name': 'Articuno',
        'region': 'Kanto',
        'url': 'https://www.pokemon.com/us/pokedex/articuno' }
    ];

    const data = await fakeRequest(index)
      .get('/pokemon')
      .expect(200);

    expect(expectation).toEqual(data.body);

  });

  it('get Articuno', async() => {

    const id = 2;

    const expectation = { 'id': '2',
      'name': 'Articuno',
      'region': 'Kanto',
      'url': 'https://www.pokemon.com/us/pokedex/articuno' };

    const data = await fakeRequest(index)
      .get(`/pokemon/${id}`)
      .expect(200);

    expect(expectation).toEqual(data.body);

  });

  it('update Pokemon Articuno to Zapdos', async() => {

    const id = 2;

    const updatePokemon = {
      name: 'Zapdos',
      region: 'Kanto',
      url: 'https://www.pokemon.com/us/pokedex/zapdos'
    };

    const expectation = { 'id': '2',
      'name': 'Zapdos',
      'region': 'Kanto',
      'url': 'https://www.pokemon.com/us/pokedex/zapdos' };

    const data = await fakeRequest(index)
      .put(`/pokemon/${id}`)
      .send(updatePokemon)
      .expect(200);

    expect(expectation).toEqual(data.body);

  });

  it('delete Pokemon Moltres', async() => {

    const id = 1;

    const expectation = { 'id': '1',
      'name': 'Moltres',
      'region': 'Kanto',
      'url': 'https://www.pokemon.com/us/pokedex/moltres' };

    const data = await fakeRequest(index)
      .delete(`/pokemon/${id}`)
      .expect(200);

    expect(expectation).toEqual(data.body);

  });

  

});