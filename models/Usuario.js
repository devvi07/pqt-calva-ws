const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  apellidos: String,
  tel: String,
  password: String,
  tipoUsuario: Number
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);