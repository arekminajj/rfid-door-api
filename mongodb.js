import { MongoClient } from "mongodb";
import 'dotenv/config'

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DB_NAME = process.env.DB_NAME;

const client = new MongoClient(CONNECTION_STRING);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db(DB_NAME);

export default db;
