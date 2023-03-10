const express = require('express');

const { productRouter } = require('./router/product.router');

const { salesRouter } = require('./router/sales.router');

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/sales', salesRouter);
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
// Agradecimentos a João Gustavo, Guilherme Palma, Rogério Lins, Edmilson, Lalá e Carla Uyemura 

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
