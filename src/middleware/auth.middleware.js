const jwt = require('jsonwebtoken');
const { findUserByIdService } = require('../service/usuario.service');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send({ message: 'O token não foi informado.' });
    }

    const parts = authHeader.split(' ');

    if(parts.length !== 2) {
        return res.status(401).send({ message: 'Token inválido!' });
    }

    const [ schema, token ] = parts;

    if(!/^Bearer$/i.test(schema)) {
        return res.status(401).send({ message: 'Token malformado.' });
    }

    jwt.verify(token, '$2b$10$yKbhQ8mESBPhLyTP077v', async (err, decoded) => {
        if(err){
            return res.status(500).send({ message: 'Token inválido!' });
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({ message: 'Token inválido!' });
        }

        req.userId = decoded.id;

        return next();
    })
}