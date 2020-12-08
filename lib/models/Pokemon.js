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

    static async find() {
      const { rows } = await pool.query('SELECT * FROM POKEMON');

      return rows.map(row => new Pokemon(row));
    }

    static async findById(id) {
      const { rows } = await pool.query('SELECT * FROM POKEMON WHERE ID=$1', [id]);
  
      if(!rows[0]) throw new Error(`No Pokemon with id ${id}`);
      return new Pokemon(rows[0]);
    }

    static async update(id, { name, region, url }) {
      const { rows } = await pool.query('UPDATE POKEMON SET name=$1, region=$2, url = $3 WHERE ID = $4 RETURNING *', [name, region, url, id]);
      return new Pokemon(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query('DELETE FROM POKEMON WHERE ID = $1 RETURNING *', [id]);
      return new Pokemon(rows[0]);
    }

};


