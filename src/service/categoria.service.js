const Categoria = require('../model/Categoria');

const findCategoriaByIdService = (id) => {
    return Categoria.findById(id);
};

const findAllCategoriaService = () => {
    return Categoria.find();
};

const createCategoriaService = (body) => {
    return Categoria.create(body);
};

const updateCategoriaService = (id, body) => {
    return Categoria.findByIdAndUpdate(id, body, { returnDocument: 'after' });
};

const deleteCategoriaService = (id) => {
    return Categoria.findByIdAndRemove(id);
};

module.exports = {
    findCategoriaByIdService,
    findAllCategoriaService,
    createCategoriaService,
    updateCategoriaService,
    deleteCategoriaService
}