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

exports.actualizarCliente = async (req, res) => {
  try {
    const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};