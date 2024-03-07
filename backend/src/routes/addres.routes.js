const { Router } = require("express");
const addresRoutes = Router();
const basePath = "/addres";
const { getBestRoutes } = require("../controllers/addres.controller");

addresRoutes.get(basePath, getBestRoutes);

module.exports = addresRoutes;