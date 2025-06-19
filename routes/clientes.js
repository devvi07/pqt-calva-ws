const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.get("/", clienteController.getClientes);
router.post("/", clienteController.crearCliente);
router.put("/:id", clienteController.actualizarCliente);

module.exports = router;