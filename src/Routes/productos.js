const { Router } = require("express");
const router = Router();

let lista = require("../Modelos/ListaProductos");

router.get("/products", (req, res) => {
  res.send(lista);
});

router.post("/products", (req, res) => {
  try {
    const products = req.body;

    if (revisarEntrada(products) && existencia(products)) {
      lista.push(products);
      res.send(lista);
    }
    res.status(400).send("Error al crear el usuario");
  } catch (e) {
    res.status(500).send("Error interno del servidor");
  }
});

router.get("/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    for (let product of lista) {
      if (product.id === id) {
        res.send(product);
      }
    }
    res.send("Producto no encontrado");
  } catch (e) {
    res.status(404).send("Producto no encontrado");
  }
});

router.put("/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    for (let product of products) {
      if (product.id === id) {
        res.send(product);
      }
    }
    res.send("Usuario no encontrado");
  } catch {
    res.status(404).send("Producto no encontrado");
  }
});

router.delete("/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    const index = lista.findIndex((order) => order.id === id);

    if (index !== -1) {
      lista.splice(index, 1);
      res.send(lista);
    }
  } catch (e) {
    res.status(500).send("Error eliminando el producto");
  }
});

function revisarEntrada(product) {
  if (product.id && product.name && product.price && product.category) {
    return true;
  }
  return false;
}

function existencia(product) {
  let result = lista.find((peticion) => peticion.id === product.id);

  return !result;
}

module.exports = router;
