const express = require('express');
require('dotenv').config();

// Conexão com o banco
const connectToDatabase = require('./src/database/database');

// Rotas de usuário
const usuario = require('./src/router/usuario.router');
// Rota de autenticação
const auth = require('./src/router/auth.router');
// Rotas de produto
const produto = require('./src/router/produto.router');
// Rotas de categoria
const categoria = require('./src/router/categoria.router');
// Rotas de carrinho
const carrinho = require('./src/router/carrinho.router');
// Rotas de pedido
const pedido = require("./src/router/pedido.router");

const app = express();

const port = 3000;

app.use(express.json());

// Conectando com o banco
connectToDatabase();

// Chamando as rotas do usuário
app.use('/usuario', usuario);
// Chamando a rota de autenticação
app.use('/auth', auth);
// Chamando as rotas de produto
app.use('/produto', produto);
// Chamando as rotas de categoria
app.use('/categoria', categoria);
// Chamando as rotas de carrinho
app.use('/carrinho', carrinho);
// Chamando as rotas de pedido
app.use("/pedido", pedido);

app.get('/', (req, res) => {
    res.send({
        message: 'Bem-vindo(a) ao nosso marketplace!'
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})