const express = require('express');
const router = express.Router();

const Automovel = require('./controllers/automovel');
const Concessionaria = require('./controllers/concessionaria');
const Cliente = require('./controllers/clientes');
const Alocacao = require('./controllers/alocacao');
const Venda = require('./controllers/venda');

// Rota raiz
router.get('/', (req, res) => {
  res.json({titulo:'Fábrica de Automóveis 2025'});
});

// Rota para obter todos os automóveis
router.get('/automoveis', Automovel.read);
router.get('/concessionarias', Concessionaria.read);
router.get('/clientes', Cliente.read);
router.get('/alocacoes', Alocacao.read);
router.get('/vendas', Venda.read);

router.post('/vendas', Venda.create);
// src/routes.js
router.post('/alocacoes', Alocacao.create);


module.exports = router;