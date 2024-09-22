//1. IMPORTACIONES
const { Router } = require("express");
const router = Router();

//LISTAS NECESARIAS
let lista = require("../Modelos/ListaUsuarios");

//2. END-POINTS
router.get("/users", (req, res) => {
  res.send(lista);
});

router.post("/users", (req, res) => {
  try {
    const usuario = req.body;

    if (revisarEntrada(usuario) && existencia(usuario)) {
      lista.push(usuario);
      res.send(lista);
    }
    res.status(400).send("Error al crear el usuario");
  } catch (e) {
    res.status(500).send("Error interno del servidor");
  }
});

/*
FALTA ESTA FUNCION!!!! 
FALTA ESTA FUNCION!!!!
*/

router.get("/users/:id", (req, res) => {});

router.put("/users/:id", (req, res) => {
  try {
    const id = req.params.id;
    const usuario = req.body;

    if (revisarEntrada(usuario) && !existencia(usuario) && id == usuario.id) {
      let arreglo = lista.find((user) => user.id == id);
      let index = lista.indexOf(arreglo);

      lista[index] = usuario;
      res.send(lista);
    }
    res.status(400).send("Error al modificar el usuario");
  } catch (e) {
    res.status(500).send(e);
  }
});

/*
FALTA ESTA FUNCION!!!! 
FALTA ESTA FUNCION!!!!
*/

router.delete("/users/:id", (req, res) => {});

//Funciones
//VERIFICAR QUE LA ENTRADA SEA APROPIADA AL JSON ESPERADO
function revisarEntrada(user) {
  if (user.id && user.name && user.email && user.age) {
    return true;
  }
  return false;
}

//VER SI EL USUARIO EXISTE
function existencia(user) {
  let result = lista.find((peticion) => peticion.id === user.id);

  return !result;
}

module.exports = router;
