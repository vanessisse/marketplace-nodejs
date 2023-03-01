const express = require('express');

// Conexão com o banco
const connectToDatabase = require('./src/database/database');

// Rota de usuário
const usuario = require('./src/router/usuario.router');

const app = express();

const port = 3000;

app.use(express.json());

// Conectando com o banco
connectToDatabase();

// Chamando as rotas do usuário
app.use('/usuario', usuario);

app.get('/', (req, res) => {
    res.send({
        message: 'Bem-vindo(a) ao nosso marketplace!'
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})