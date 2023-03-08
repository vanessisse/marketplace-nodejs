const pedidoService = require('../service/pedido.service');

const findPedidoByIdController = async (req, res) => {
  try{
    res.send(await pedidoService.findPedidoByIdService(req.params.id));
}catch (err) {
    console.log(`Erro: ${err.message}`)
    return res.status(500).send({ message: 'Erro! Tente novamente.' });
}
};

const findAllPedidoController = async (req, res) => {
  try{
    res.send(await pedidoService.findPedidoService());
}catch (err) {
    console.log(`Erro: ${err.message}`)
    return res.status(500).send({ message: 'Erro! Tente novamente.' });
}
};

const createPedidoController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      userId: req.userId,
      createdAt: new Date(),
    }
    res.send(await pedidoService.createPedidoService(corpo));
}catch (err) {
    console.log(`Erro: ${err.message}`)
    return res.status(500).send({ message: 'Erro! Tente novamente.' });
}
};

const deletePedidoController = async (req, res) => {
  try{
    const del = await pedidoService.deletePedidoService(req.params.id);

    if(del != null ){
      res.status(200).send({ message: 'Pedido removido com sucesso!' });
    }else{
      res.status(404).send({ message: 'Pedido não encontrado!' });
    }
}catch (err) {
    console.log(`Erro: ${err.message}`)
    return res.status(500).send({ message: 'Erro! Tente novamente.' });
}
};

const updateStatusPedidoController = async (req, res) => {
  try{
    res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id));
}catch (err) {
    console.log(`Erro: ${err.message}`)
    return res.status(500).send({ message: 'Erro! Tente novamente.' });
}
};


module.exports = {
    findAllPedidoController,
    findPedidoByIdController,
    createPedidoController,
    deletePedidoController,
    updateStatusPedidoController
};