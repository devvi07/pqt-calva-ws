const Cliente = require("../models/Cliente");

exports.getClientes = async (req, res) => {
  const cliente = await Cliente.find();
  res.json(cliente);
};

exports.crearCliente = async (req, res) => {
  const nuevo = new Cliente(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};