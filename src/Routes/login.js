const { Router } = require("express");
const router = Router();
router.use(express.json());
const jwt = require("jsonwebtoken");
let lista = require("../Modelos/ListaLogin");

//TRAE EL EMAIL Y CONTRASEÑA DE LISTALOGIN.JSON. NO SIRVIÓ
router.get("/login", authenticateToken, (req, res) => {
  res.json(lista.filter((post) => post.user === req.email.name));
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

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
