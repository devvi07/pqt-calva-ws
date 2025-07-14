const express = require("express");
const router = express.Router();
const paqueteController = require("../controllers/paquetesController");

router.get("/", paqueteController.getPaquetes);
router.get('/cliente/:idCliente', paqueteController.getPaquetesPorCliente);
router.post("/", paqueteController.crearPaquete);
router.put("/:id", paqueteController.actualizarPaquete);
router.put("/", paqueteController.actualizarMultiplesPaquetes);
router.delete("/:id", paqueteController.eliminarPaquete);

module.exports = router;