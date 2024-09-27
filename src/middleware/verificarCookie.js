function verificar(req, res, next) {
  if (req.session.status) {
    next();
  }
  return res.status(403).send("No autentificado");
}

module.exports = verificar;
