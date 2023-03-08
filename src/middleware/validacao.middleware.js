const ObjectId = require('mongoose').Types.ObjectId;

const validaUsuario = (req, res, next) => {
    // Verificação individual de erros e tratamento
    if (!req.body.nome) {
        return res.status(400).send({ message: "O campo 'nome' deve ser preenchido" });
    }
    if (!req.body.email) {
        return res.status(400).send({ message: "O campo 'e-mail' deve ser preenchido" });
    }
    if (!req.body.senha) {
        return res.status(400).send({ message: "O campo 'senha' deve ser preenchido" });
    }
    if (!req.body.imagem) {
        return res.status(400).send({ message: "O campo 'imagem' deve ser preenchido" });
    }
    if (!req.body.admin) {
        return res.status(400).send({ message: "O campo 'admin' deve ser preenchido" });
    }
    return next();
}

const validaProduto = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.nome) {
        erros.push('nome');
    }
    if (!req.body.descricao) {
        erros.push('nome');
    }
    if (!req.body.precoUnitario) {
        erros.push('precoUnitario');
    }
    if (!req.body.imagem) {
        erros.push('imagem');
    }
    if (!req.body.codigoBarra) {
        erros.push('codigoBarra');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaCategoria = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: "O campo 'nome' deve ser preenchido" });
    }
    return next();
}

const validaPedido = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.precoTotal) {
        erros.push('precoTotal');
    }
    if (!req.body.frete) {
        erros.push('frete');
    }
    if (req.body.concluido == undefined) {
        erros.push('concluido');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaCarrinho = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.precoTotal) {
        erros.push('precoTotal');
    }
    if (!req.body.frete) {
        erros.push('frete');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaId = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: 'O campo ID não corresponde ao padrão necessário.' });
    }
}

const validaLogin = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.email) {
        erros.push('email');
    }
    if (!req.body.senha) {
        erros.push('senha');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho,
    validaId,
    validaLogin
}