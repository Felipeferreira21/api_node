const express = require('express');
const router = express.Router();


// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "alterando um produto"
    });
});


// CRIA UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Criando um novo produto"
    });
});


// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: "Você escontrou um produto exclusivo",
            id: id
        });
    }else {
        res.status(200).send({
            mensagem: "Você passou um id"
        });
    }
});


// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "alterando um pedido"
    });
});


// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Deletando um pedido"
    });
});

module.exports = router;