const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paquetesSchema = new Schema({
  descPaquete: String,
  clasificacion: String,
  destino: String,
  fotos: String,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model('Paquetes', paquetesSchema);