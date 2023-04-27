const express = require('express');
const router = express.Router();


// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando método Get dentro da rota de pedidos"
    });
});


// CRIA UM PEDIDO NOVO
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto : req.body.id_produto,
        quantidade : req.body.quantidade
    }
    res.status(201).send({
        mensagem: "Usando método post dentro da rota de pedidos",
        pedidoCriado : pedido
    });
});


// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: "Informacoes do pedido: ",
        id_pedido: id
        });
});


// ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Alterando um pedido"
    });
});


// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Deletando um pedido"
    });
});

module.exports = router;