import { conn } from '../db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, days, maxconn } = req.body;
    const now = Math.floor(Date.now() / 1000);
    const exp = now + days * 86400;
    const [result] = await conn.execute("INSERT INTO users (username, password, exp_date, max_connections, created_at, enabled) VALUES (?, ?, ?, ?, ?, 1)", [username, password, exp, maxconn, now]);
    res.status(200).json({ success: true, user_id: result.insertId });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
