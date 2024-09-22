const { Router } = require("express");
const router = Router();

let lista = require("../Modelos/ListaPedidos");
let usuarios = require("../Modelos/ListaUsuarios");
let productos = require("../Modelos/ListaProductos");

router.get("/orders", (req, res) => {
  res.send(lista);
});

router.post("/orders", (req, res) => {
  try {
    let pedido = req.body;
    lista.push(pedido);
    res.send();
  } catch (e) {
    res.send(e);
  }
});

router.get("/orders/:id", (req, res) => {
  try {
    const id = req.params.id;
    for (let pedido of lista) {
      if (pedido.id == id) {
        res.send(pedido);
      }
    }
    res.send("Pedido no encontrado");
  } catch (e) {
    res.status(404).send("Pedido no encontrado");
  }
});

module.exports = router;
