const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalidasSchema = new Schema({
  destino: String,
  fecha: String,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Salidas', SalidasSchema);