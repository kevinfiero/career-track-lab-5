const client = require('./lib/utils/pool');

run();

async function run() {

  try {
    await client.connect();
    
    await client.query(`
            DROP TABLE IF EXISTS pokemon;
        `);

    console.log('drop tables complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
