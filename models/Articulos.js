const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articulosSchema = new Schema({
  marca: String,
  descripcion: String,
  talla: String,
  color: String,
  precio: String,
  clasif: String,
  fotos: String
}, { timestamps: true });

module.exports = mongoose.model('Articulos', articulosSchema);