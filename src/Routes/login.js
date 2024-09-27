const { Router } = require("express");
const router = Router();

const bcrypt = require("bcrypt");
let list = require("../Modelos/ListaLogin");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = list.find((u) => u.email === email);
  if (!user) {
    return res.status(401).send("Usuario no encontrado");
  }

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) {
    return res.status(401).send("Contraseña incorrecta");
  }

  req.session.status = "valido";
  res.send("Inicio de sesión exitoso");
});

module.exports = router;
