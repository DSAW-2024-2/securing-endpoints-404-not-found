//COMENZAR CON ROUTES

//1. IMPORTAR
const { Router } = require("express");
const router = Router();

//LISTAS NECESARIAS
let lista = require("../Modelos/ListaPedidos");
let usuarios = require("../Modelos/ListaUsuarios");
let productos = require("../Modelos/ListaProductos");

//2. END-POINTS
router.get("/orders", (req, res) => {
  res.send(lista);
});

router.post("/orders", (req, res) => {
  //VERIFICAR QUE EL BODY QUE SE MANDA SEA UN OBJETO QUE CUMPLA CON ESAS RESTRICCIONES
  function revisarEntrada(pedido) {
    if (
      pedido.id &&
      pedido.status &&
      pedido.productId &&
      pedido.quantity &&
      pedido.userId
    ) {
      return true;
    }
    return false;
  }

  //VERIFICAR QUE NO EXISTA OTRO PEDIDO IGUAL, Y ADEMAS VERIFICAR QUE EL USUARIO Y EL PRODUCTO EXISTAN
  function existencia(pedido) {
    let producto = productos.find(
      (producto) => producto.id === pedido.productId
    );
    let user = usuarios.find((user) => user.id === pedido.userId);
    let peticion = lista.find((peticion) => peticion.id === pedido.id);

    if (producto && user && !peticion) {
      return true;
    }
    return false;
  }

  try {
    let pedido = req.body;
    if (revisarEntrada(pedido) && existencia(pedido)) {
      lista.push(pedido);
      res.send(lista);
    } else {
      res.status(400).send({ message: "Error al crear el pedido" });
    }
  } catch (e) {
    res.status(500).send("Error interno del servidor");
  }
});

router.get("/orders/:id", (req, res) => {
  try {
    const id = req.params.id;
    for (let pedido of lista) {
      if (pedido.id === id) {
        res.send(pedido);
      }
    }
    res.send("Pedido no encontrado");
  } catch (e) {
    res.status(404).send("Pedido no encontrado");
  }
});

//3. EXPORTAR
module.exports = router;
