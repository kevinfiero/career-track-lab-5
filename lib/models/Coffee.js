const pool = require('../utils/pool');

module.exports = class Console {
    id;
    coffee;
    company;
    hot;
    yearlySales;

    constructor(row){
      this.id = row.id;
      this.coffee = row.coffee;
      this.company = row.company;
      this.hot = row.hot;
      this.yearlySales = row.yearly_sales;
    }

    //CRUD Methods

    static async insert({ coffee, company, hot, yearlySales }) {
      const { rows } = await pool.query(
        'INSERT INTO COFFEES (coffee, company, hot, yearly_sales) VALUES ($1, $2, $3, $4) RETURNING *',
        [coffee, company, hot, yearlySales]
      );

      return new Console(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELECT * FROM COFFEES');

      return rows.map(row => new Console(row));
    }

    static async findById(id) {
      const { rows } = await pool.query('SELECT * FROM COFFEES WHERE ID=$1', [id]);
  
      if(!rows[0]) throw new Error(`No Console with id ${id}`);
      return new Console(rows[0]);
    }

    static async update(id, { coffee, company, hot, yearlySales }) {
      const { rows } = await pool.query('UPDATE COFFEES SET coffee=$1, company=$2, hot = $3, yearly_sales = $4 WHERE ID = $5 RETURNING *', [coffee, company, hot, yearlySales, id]);
      return new Console(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query('DELETE FROM COFFEES WHERE ID = $1 RETURNING *', [id]);
      return new Console(rows[0]);
    }

};
