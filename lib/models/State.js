const pool = require('../utils/pool');

module.exports = class State {
    id;
    state;
    capital;
    url;

    constructor(row){
      this.id = row.id;
      this.state = row.state;
      this.capital = row.capital;
      this.url = row.url;
    }

    //CRUD Methods

    static async insert({ state, capital, url }) {
      const { rows } = await pool.query(
        'INSERT INTO states (state, capital, url) VALUES ($1, $2, $3) RETURNING *',
        [state, capital, url]
      );
      return new State(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELECT * FROM STATES');

      return rows.map(row => new State(row));
    }

    static async findById(id) {
      const { rows } = await pool.query('SELECT * FROM STATES WHERE ID=$1', [id]);
  
      if(!rows[0]) throw new Error(`No State with id ${id}`);
      return new State(rows[0]);
    }

    static async update(id, { state, capital, url }) {
      const { rows } = await pool.query('UPDATE STATES SET state=$1, capital=$2, url = $3 WHERE ID = $4 RETURNING *', [state, capital, url, id]);
      return new State(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query('DELETE FROM STATES WHERE ID = $1 RETURNING *', [id]);
      return new State(rows[0]);
    }

};
