
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});
app.listen(port);

app.get('/add/:n/:m', (req, res) => {
  res.json(Number(req.params.n) + Number(req.params.m))
});


app.get('/sum', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      res.status(400).send('Invalid numbers');
      return;
    }
  
    const sum = num1 + num2;
    res.send(`The sum is: ${sum}`);
  });




