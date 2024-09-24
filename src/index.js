//AQUI SE HACEN TODOS LOS AJUSTES DE LA API EN GENERAL

//1. IMPORTAR DEPENDENCIAS
const express = require("express");
const app = express();

const cors = require("cors");

//2. CONFIGURACION DE LA API
app.use(cors());
app.use(express.json());

//USANDO ROUTES PARA SEPARAR EL CODIGO EN MODULOS
app.use(require("./Routes/usuarios.js"));
app.use(require("./Routes/pedidos.js"));
app.use(require("./Routes/productos.js"));

// Capturar rutas no definidas (404)
app.use((req, res, next) => {
  res.status(404).json("Ruta no encontrada");
});

//3. INICIAR LA API
let port = process.env.PORT || 3000;
app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`server is running on port ${port}`);
});
