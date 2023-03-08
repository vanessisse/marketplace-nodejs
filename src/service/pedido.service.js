const Pedido = require("../model/Pedido");

const findPedidoByIdService = async (id) => {
  return await Pedido.findById(id);
};

const findPedidoService = async () => {
  return await Pedido.find();
};

const createPedidoService = async (body) => {
  return await Pedido.create(body);
};

const deletePedidoService = async (id) => {
  return await Pedido.findByIdAndRemove(id);
};

const updateStatusPedidoService = (id) => {
  return Pedido.findByIdAndUpdate({ _id: id}, {$set: { concluido: true }});
}

module.exports = {
  findPedidoService,
  findPedidoByIdService,
  createPedidoService,
  deletePedidoService,
  updateStatusPedidoService
};