const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  numero: String,
  zona: String,
  nombre: String,
  direccion: String,
  tel: String,
  nombreRecibe: String,
  direccionRecibe: String,
  telRecibe: String,
  paquetes: [{ type: Schema.Types.ObjectId, ref: 'Paquetes' }]
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);