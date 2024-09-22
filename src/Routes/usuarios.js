const { Router } = require("express");
const router = Router();

let lista = require("../Modelos/ListaUsuarios");

router.get("/users", (req, res) => {
  res.send(lista);
});

router.post("/users", (req, res) => {});

router.get("/users/:id", (req, res) => {});

router.put("/users/:id", (req, res) => {});

router.delete("/users/:id", (req, res) => {});

module.exports = router;
