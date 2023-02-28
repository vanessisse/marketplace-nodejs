const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller')

router.get('/findById:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersCrontoller);

router.post('/create', usuarioController.createUserController);
router.post('/addAdress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProduct);

router.put('/update/:id', usuarioController.updateUserController);

router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAdress', usuarioController.addUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);

module.exports = router;

