const express = require("express");
const router = express.Router();
const salidasController = require("../controllers/salidasController");

router.get("/", salidasController.getSalidas);
router.post("/", salidasController.crearSalidas);

module.exports = router;