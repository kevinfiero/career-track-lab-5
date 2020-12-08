const pool = require('../utils/pool');

module.exports = class Pokemon {
    id;
    name;
    region;
    url;

    constructor(row){
      this.id = row.id;
      this.name = row.name;
      this.region = row.region;
      this.url = row.url;
    }

    //CRUD Methods

    static async insert({ name, region, url }) {
      const { rows } = await pool.query(
        'INSERT INTO pokemon (name, region, url) VALUES ($1, $2, $3) RETURNING *',
        [name, region, url]
      );

      return new Pokemon(rows[0]);
    }

};


