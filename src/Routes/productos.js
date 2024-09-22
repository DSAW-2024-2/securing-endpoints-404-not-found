const { Router } = require("express");
const router = Router();

let lista = require("../Modelos/ListaProductos");

router.get("/products", (req, res) => {});

router.post("/products", (req, res) => {});

router.get("/products/:id", (req, res) => {});

router.put("/products/:id", (req, res) => {});

router.delete("/products/:id", (req, res) => {});

module.exports = router;
