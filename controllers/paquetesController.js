const Paquete = require("../models/Paquetes");

exports.getPaquetes = async (req, res) => {
  const paquete = await Paquete.find();
  res.json(paquete);
};

exports.getPaquetesPorCliente = async (req, res) => {
  const { idCliente } = req.params;

  try {
    const paquetes = await Paquete.find({ idCliente: idCliente, status: 'Entregado' });
    res.json(paquetes);
  } catch (error) {
    console.error("Error al obtener paquetes por cliente:", error);
    res.status(500).json({ error: "Error al obtener los paquetes" });
  }
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

exports.actualizarMultiplesPaquetes = async (req, res) => {
  const { ids, data } = req.body; // ids = [id1, id2, id3], data = { campo1: valor, campo2: valor }

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: "Debes enviar un arreglo de IDs" });
  }

  try {
    const resultado = await Paquete.updateMany(
      { _id: { $in: ids } },
      { $set: data }
    );

    res.json({
      mensaje: "Paquetes actualizados",
      modificados: resultado.modifiedCount
    });
  } catch (error) {
    console.error("Error al actualizar:", error);
    res.status(500).json({ error: "Error al actualizar los paquetes" });
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