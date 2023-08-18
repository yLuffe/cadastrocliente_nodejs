const express = require('express');
const { getLista, getCliente, inserir,
    alterar, excluir } = require("./clienterecurso");

const router = express.Router(); // Inicializa o roteador dos serviços

router.get('/', (req, res) => { // Rota default
    res.json({
        "statusCode": 200, "msg": "API CRUD Cliente Rodando"
    })
});

router.get('/clientes', getLista); // Retorna todos os clientes
router.get('/cliente/:clienteId', getCliente); // Procura um cliente
router.post('/cliente', inserir); // Insere um novo cliente
router.put('/cliente/:clienteId', alterar); // Altera um cliente
router.delete('/cliente/:clienteId', excluir); // Exclui um cliente

module.exports = router; // Exporta o roteador