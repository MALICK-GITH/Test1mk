import { conn } from '../db.js';

export default async function handler(req, res) {
  const [rows] = await conn.execute("SELECT id, username, FROM_UNIXTIME(exp_date) AS expiration, max_connections, enabled FROM users ORDER BY id DESC");
  res.status(200).json(rows);
}
