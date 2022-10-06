const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index", {"lucas": 'Lucas Hideki Minamihara dos Santos'});
});

module.exports = routes;
