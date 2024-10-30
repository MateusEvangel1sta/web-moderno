const express = require('express');
const app = express();

const port = 3000;

app.get('/opa', (req, res) => {
  res.json([
    { id: 7, name: 'Ana', position: 1 },
    { id: 24, name: 'Bia', position: 2 },
    { id: 73, name: 'Carlos', position: 3 },
  ]);
  
  // res.json({
  //   name: 'Ipad 32GB',
  //   price: 1899.00,
  //   discount: 0.12
  // });

  // res.send('Estou bem!');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});