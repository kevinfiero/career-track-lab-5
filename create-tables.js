const client = require('./lib/utils/pool');

run();

async function run() {

  try {
    await client.connect();
    
    await client.query(`
    CREATE TABLE pokemon (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name TEXT NOT NULL,
      region TEXT NOT NULL,
      url TEXT NOT NULL
  );
  ;
        `);

    console.log('create tables complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
