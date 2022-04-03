const porta = 3003;

const express = require('express');
const { conformsTo } = require('lodash');
const app = express();

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }); // CONVERTE PARA JSON
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
})