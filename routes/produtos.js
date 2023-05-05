const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const mysql = require('../mysql').pool;
=======
const produtos = require('../mysql').pool;
>>>>>>> origin/main


// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
<<<<<<< HEAD
    mysql.getConnection((error, conn) =>{
        if (error) {return res.status(500).send({error: error}) }
        conn.query(
            'SELECT * FROM produtos;',
            (error, resultado, fields) => {
                if (error) {return res.status(500).send({error: error})} 
                return res.status(200).send({response: resultado})
            }
        )
    });    

=======
    res.status(200).send({
        mensagem: "alterando um produto"
    });
>>>>>>> origin/main
});


// CRIA UM PRODUTO
router.post('/', (req, res, next) => {
<<<<<<< HEAD
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
=======

    mysql.getConnection((error, conn) => {
>>>>>>> origin/main
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?, ?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release();
<<<<<<< HEAD
                if (error) {return res.status(500).send({error: error, response: null})}
                
                res.status(201).send({
                    mensagem: "Novo produto criado",
=======
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response:  null
                    });
                }
                res.status(201).send({
                    mensagem: "Criando um novo produto",
>>>>>>> origin/main
                    id_produto: resultado.insertId 
                });
            }
        )
    }); 
});


// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
<<<<<<< HEAD
    mysql.getConnection((error, conn) =>{
        if (error) {return res.status(500).send({error: error}) }
        conn.query(
            'SELECT * FROM produtos WHERE id_produto = ?;',
            [req.params.id_produto],
            (error, resultado, fields) => {
                if (error) {return res.status(500).send({error: error})} 
                return res.status(200).send({response: resultado})
            }
        )
    });    

});




// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            `UPDATE produtos
                SET nome        = ?,
                    preco       = ?
              WHERE id_produto  = ?`,
            
            [
            req.body.nome,
            req.body.preco,
            req.body.id_produto
            ],

            (error, resultado, field) => {
                conn.release();
                if (error) {return res.status(500).send({error: error, response: null})}
                
                res.status(202).send({
                    mensagem: "Produto alterado com sucesso"
                });
            }
        )
    }); 
=======
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
>>>>>>> origin/main
});


// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
<<<<<<< HEAD
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            `DELETE FROM produtos WHERE id_produto = ?`, [req.body.id_produto],
            (error, resultado, field) => {
                conn.release();
                if (error) {return res.status(500).send({error: error, response: null})}
                
                res.status(202).send({
                    mensagem: "Produto removido com sucesso" 
                });
            }
        )
    }); 
=======
    res.status(201).send({
        mensagem: "Deletando um pedido"
    });
>>>>>>> origin/main
});

module.exports = router;