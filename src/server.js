const express = require('express');
const app = express();
const port = 3009; // You can choose any port

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
