const express = require('express');
const app = express();

const port = 3000;

app.use('/opa', (req, res, next) => {
  console.log('Antes...');
  next();
});

app.get('/opa', (req, res, next) => {
  console.log('Durante...')
  res.json({
      data: [{ id: 7, name: 'Ana', position: 1 },
      { id: 24, name: 'Bia', position: 2 },
      { id: 73, name: 'Carlos', position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  });
  
  next();
  
  // res.json({
  //   name: 'Ipad 32GB',
  //   price: 1899.00,
  //   discount: 0.12
  // });

  // res.send('Estou bem!');
});

app.use('/opa', (req, res) => {
  console.log('Depois...');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});