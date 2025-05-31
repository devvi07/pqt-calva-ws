const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.getUsuarios);
router.post("/", usuarioController.crearUsuario);
router.post("/login", usuarioController.login);

module.exports = router;