const pool = require('../utils/pool');

module.exports = class Console {
    id;
    console;
    company;
    countryHQ;
    yearlySales;

    constructor(row){
      this.id = row.id;
      this.console = row.console;
      this.company = row.company;
      this.countryHQ = row.country_hq;
      this.yearlySales = row.yearly_sales;
    }

    //CRUD Methods

    static async insert({ console, company, countryHQ, yearlySales }) {
      const { rows } = await pool.query(
        'INSERT INTO CONSOLES (console, company, country_hq, yearly_sales) VALUES ($1, $2, $3, $4) RETURNING *',
        [console, company, countryHQ, yearlySales]
      );

      return new Console(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELECT * FROM CONSOLES');

      return rows.map(row => new Console(row));
    }

    static async findById(id) {
      const { rows } = await pool.query('SELECT * FROM CONSOLES WHERE ID=$1', [id]);
  
      if(!rows[0]) throw new Error(`No Console with id ${id}`);
      return new Console(rows[0]);
    }

    static async update(id, { console, company, countryHQ, yearlySales }) {
      const { rows } = await pool.query('UPDATE CONSOLES SET console=$1, company=$2, country_hq = $3, yearly_sales = $4 WHERE ID = $5 RETURNING *', [console, company, countryHQ, yearlySales, id]);
      return new Console(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query('DELETE FROM CONSOLES WHERE ID = $1 RETURNING *', [id]);
      return new Console(rows[0]);
    }

};
