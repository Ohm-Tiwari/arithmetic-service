require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());

if (!process.env.PORT) {
    throw new Error(`Please specify the
    port number for the HTTP server with the environment variable PORT. `);
    }

const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Arithmetic service - last updated 3/5/2024');
});
app.get('/add/:n/:m', (req, res) => {
    const n = Number(req.params.n);
    const m = Number(req.params.m); 
    let sum = add(n, m);
      res.json(sum);
  });
  app.listen(port);




