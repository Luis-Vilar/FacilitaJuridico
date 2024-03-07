const { Router } = require("express");
const clientsRoutes = Router();
const basePath = "/clients";
const {
  create,
  deleteOne,
  getAll,
  update,
} = require("../controllers/client.controller");

const {bodyValidatorPostClient} = require("../utils/clients.utils");

clientsRoutes.get(basePath, getAll);
clientsRoutes.post(basePath,bodyValidatorPostClient ,create);
clientsRoutes.put(`${basePath}/:id`, update);
clientsRoutes.delete(`${basePath}/:id`, deleteOne);

module.exports = clientsRoutes;
