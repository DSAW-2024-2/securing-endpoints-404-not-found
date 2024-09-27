// CONTRASEÑA ESTÁ COMENTARIADO PARA PROBAR SOLO EMAIL PRIMERO. AHÍ EL SERVIDOR YA SE HABÍA TOTEADO

let bcrypt = require("bcrypt");
let lista = [
  {
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin", 5),
  },
];

module.exports = lista;
