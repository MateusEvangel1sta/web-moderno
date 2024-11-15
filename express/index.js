const express = require('express');
const app = express();

const port = 3000;

const saudacao = require('./saudacaoMid');

app.use(saudacao('Guilherme'));

app.use('/opa', (req, res, next) => {
  console.log('Antes...');
  next();
});

app.get('/cliente/relatorio', (req, res) => {
  res.send(`Relatório Cliente: Completo. ${req.query.completo} ano = ${req.query.ano}`);
});

app.get('/corpo', (req, res) => {
  let corpo = ''
  
  req.on('data', function(parte) {
    corpo += parte;
  });

  req.on('end', function() {
    res.send(corpo);
  });
});

app.get('/cliente/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
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