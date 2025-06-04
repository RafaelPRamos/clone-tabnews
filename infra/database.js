import {Client, ClientConfig} from 'pg';

async function query(queryString){
  
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  });

  await client.connect();
  const result = await client.query(queryString);
  await client.end();
  return result;
}

export default {
  query:query,
}
