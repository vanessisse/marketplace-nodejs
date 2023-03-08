const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const carrinhoController = require('../controller/carrinho.controller');
const { validaCarrinho } = require('../middleware/validacao.middleware');

router.get('/find/:id', authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get('/findAll', authMiddleware, carrinhoController.findAllCarrinhoController);

router.post('/create', authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);

router.put('/update/:id', authMiddleware, validaCarrinho, carrinhoController.updateCarrinhoController);

router.delete('/delete/:id', authMiddleware, carrinhoController.deleteCarrinhoController);

module.exports = router;