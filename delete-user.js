import { conn } from '../db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username } = req.body;
    await conn.execute("DELETE FROM users WHERE username = ?", [username]);
    res.status(200).json({ success: true });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
