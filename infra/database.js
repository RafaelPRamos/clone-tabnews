import { Client } from "pg";

async function query(queryString) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });
  try {
    await client.connect();
    const result = await client.query(queryString);
    return result;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    await client.end();
  }
}

async function getStatus() {
  try {
    const activeConnections = await query({
      text: "SELECT count(*) FROM pg_stat_activity WHERE state = 'active' AND datname = $1",
      values: [process.env.POSTGRES_DB],
    });
    const settings = await query({
      text: "SELECT current_setting('server_version') as version, current_setting('max_connections') AS max_connections;",
      values: [],
    });
    const updateAt = new Date().toISOString();
    return {
      active_connections: parseInt(activeConnections.rows[0].count, 10),
      version: settings.rows[0].version,
      max_connections: parseInt(settings.rows[0].max_connections, 10),
      update_at: updateAt,
    };
  } catch (error) {
    console.error("Error getting status:", error);
    throw error;
  }
}

export default {
  query,
  getStatus,
};
