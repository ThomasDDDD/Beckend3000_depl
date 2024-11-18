import express from "express";
import "dotenv/config";

const PORT = process.env.SERCRET_EXAMPLE_PORT || 3000;
const KEY = process.env.SERCRET_EXAMPLE_KEY;
const app = express();

app.get("/", (req, res) => {
  res.send(`Hallo vom Server. key:${KEY}`);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf: http://localhost:${PORT} `);
});
