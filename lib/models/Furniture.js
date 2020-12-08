const pool = require('../utils/pool');

module.exports = class Furniture {
    id;
    furniture;
    constructionMaterial;
    primaryColor;


    constructor(row){
      this.id = row.id;
      this.furniture = row.furniture;
      this.constructionMaterial = row.constructionMaterial;
      this.primaryColor = row.primaryColor;
    }

    //CRUD Methods

    static async insert({ furniture, constructionMaterial, primaryColor }) {
      const { rows } = await pool.query(
        'INSERT INTO furniture (furniture, construction_material, primary_color) VALUES ($1, $2, $3) RETURNING *',
        [furniture, constructionMaterial, primaryColor]
      );
      return new Furniture(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELECT * FROM FURNITURE');

      return rows.map(row => new Furniture(row));
    }

    static async findById(id) {
      const { rows } = await pool.query('SELECT * FROM FURNITURE WHERE ID=$1', [id]);
  
      if(!rows[0]) throw new Error(`No Furniture with id ${id}`);
      return new Furniture(rows[0]);
    }

    static async update(id, { furniture, constructionMaterial, primaryColor }) {
      const { rows } = await pool.query('UPDATE FURNITURE SET furniture=$1, construction_material=$2, primary_color = $3 WHERE ID = $4 RETURNING *', [furniture, constructionMaterial, primaryColor, id]);
      return new Furniture(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query('DELETE FROM FURNITURE WHERE ID = $1 RETURNING *', [id]);
      return new Furniture(rows[0]);
    }

};
