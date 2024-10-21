const express = require('express');
const app = express();

const port = 3000;

app.use((req, res) => {
  res.send('Estou bem!');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});