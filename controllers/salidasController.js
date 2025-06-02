const Salidas = require("../models/Salidas");

exports.getSalidas = async (req, res) => {
  const salida = await Salidas.find();
  res.json(salida);
};

exports.crearSalidas = async (req, res) => {
  const nuevo = new Salidas(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};