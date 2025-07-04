const express = require("express");
const router = express.Router();
const articuloController = require("../controllers/articulosController");

router.get("/", articuloController.getArticulos);
router.post("/", articuloController.crearArticulo);
router.put("/:id", articuloController.actualizarArticulo);
router.delete("/:id", articuloController.eliminarArticulo);

module.exports = router;