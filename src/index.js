
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});
app.get('/add/:n/:m', (req, res) => {
    const n = Number(req.params.n);
    const m = Number(req.params.m);
  
    let sum = add(n, m);
      res.json(sum);
  });

  app.listen(port);




