const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(require("./Routes/usuarios.js"));
app.use(require("./Routes/pedidos.js"));
app.use(require("./Routes/productos.js"));

// Capturar rutas no definidas (404)
app.use((req, res, next) => {
  res.status(404).json({
    message: "Ruta no encontrada",
  });
});

let port = process.env.PORT || 3000;
app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`server is running on port ${port}`);
});
