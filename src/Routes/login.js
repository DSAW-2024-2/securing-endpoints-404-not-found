const { Router } = require("express");
const router = Router();
router.use(express.json());
const jwt = require("jsonwebtoken");
let lista = require("../Modelos/ListaLogin");

//TRAE EL EMAIL Y CONTRASEÑA DE LISTALOGIN.JSON. NO SIRVIÓ
router.get("/login", (req, res) => {
  res.json(lista);
});

/*Esto es para autenticar el usuario si la lista estuviera desocupada haciendo un post, pero le puse la info
 para probar el get, entonces si quieres seguirlo así pues dale*/
router.post("/login", (req, res) => {
  const user = req.body.email;
  //const userpassword = req.body.password;
  const email = { name: user };
  //const password = { name: userpassword };
  const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});
