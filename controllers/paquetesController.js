const Paquete = require("../models/Paquetes");

exports.getPaquetes = async (req, res) => {
  const paquete = await Paquete.find();
  res.json(paquete);
};

exports.crearPaquete = async (req, res) => {
  const nuevo = new Paquete(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.actualizarPaquete = async (req, res) => {
  try {
    const actualizado = await Paquete.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminarPaquete = async (req, res) => {
  try {
    const eliminado = await Paquete.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Paquete eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};