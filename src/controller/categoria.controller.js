const categoriaService = require('../service/categoria.service');

const findCategoriaByIdController = async (req, res) => {
    try{
        return res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    }catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const findAllCategoriaController = async (req, res) => {
    try{
        return res.status(200).send(await categoriaService.findAllCategoriaService());
    }catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const createCategoriaController = async (req, res) => {
    try{
        return res.status(201).send(await categoriaService.createCategoriaService(corpo));
    }catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const updateCategoriaController = async (req, res) => {
    try{
        return res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    }catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const deleteCategoriaController = async (req, res) => {
    try{
        return res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
    }catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

module.exports = {
    findCategoriaByIdController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}