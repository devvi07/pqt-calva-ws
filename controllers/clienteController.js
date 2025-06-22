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

exports.actualizarTodosLosClientes = async (req, res) => {
  try {
    const resultado = await Cliente.updateMany({}, req.body);

    if (resultado.modifiedCount === 0) {
      return res.status(404).json({ mensaje: "No se modificó ningún cliente" });
    }

    res.json({
      mensaje: "Clientes actualizados correctamente",
      modificados: resultado.modifiedCount
    });
    
  } catch (error) {
    console.error("Error al actualizar clientes:", error);
    res.status(400).json({ error: "Error al actualizar los clientes" });
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    const eliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Usuario eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};