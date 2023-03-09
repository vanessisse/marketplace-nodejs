const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller')
const authMiddleware = require('../middleware/auth.middleware');
const { validaUsuario, validaId } = require('../middleware/validacao.middleware');
const paginacao = require('../middleware/paginacao.middleware');

// Rotas GET
router.get('/findById/:id', authMiddleware, validaId, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersCrontoller);

// Rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAddress/:id', authMiddleware, validaId, usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', authMiddleware, validaId, usuarioController.addUserFavProductController);

// Rotas PUT
router.put('/update/:id', authMiddleware, validaId, validaUsuario, usuarioController.updateUserController);

// Rotas DELETE
router.delete('/remove/:id', authMiddleware, validaId, usuarioController.removeUserController);
router.delete('/removeAddress', authMiddleware, usuarioController.removeUserAddressControler);
router.delete('/removeFavProduct/:id', authMiddleware, validaId, usuarioController.removeUserFavProductController);

module.exports = router;