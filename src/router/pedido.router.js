const express = require('express');
const router = express.Router();

const pedidoController = require('../controller/pedido.controller');
const authMiddleware = require("../middleware/auth.middleware");
// const { validaPedido } = require("../middleware/validacao.middleware");

router.get('/findAll', authMiddleware, pedidoController.findAllPedidoController);
router.get('/find/:id', authMiddleware, pedidoController.findPedidoByIdController);
router.post('/create', authMiddleware, pedidoController.createPedidoController);
// router.put('/update/:id', authMiddleware, pedidoController.updatePedidoController);
router.delete('/delete/:id', authMiddleware, pedidoController.deletePedidoController);

router.patch('/updateStatus/:id', authMiddleware, pedidoController.updateStatusPedidoController);

module.exports = router;