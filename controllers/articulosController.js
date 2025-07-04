const Articulo = require("../models/Articulos");

exports.getArticulos = async (req, res) => {
  const articulo = await Articulo.find();
  res.json(articulo);
};

exports.crearArticulo = async (req, res) => {
  const nuevo = new Articulo(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.actualizarArticulo = async (req, res) => {
  try {
    const actualizado = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminarArticulo = async (req, res) => {
  try {
    const eliminado = await Articulo.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Articulo eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};