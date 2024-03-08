const { Router } = require("express");
const clientsRoutes = Router();
const basePath = "/clients";
const {
  create,
  deleteOne,
  getAll,
  update,
  findByEmail,
  findByName,
  findByPhone,
  findById
} = require("../controllers/client.controller");

const {bodyValidatorPostClient} = require("../utils/clients.utils");

clientsRoutes.get(basePath,findByEmail,findByName,findByPhone, getAll);
clientsRoutes.get(`${basePath}/:id`, findById);
clientsRoutes.post(basePath,bodyValidatorPostClient ,create);
clientsRoutes.put(`${basePath}/:id`, update);
clientsRoutes.delete(`${basePath}/:id`, deleteOne);

module.exports = clientsRoutes;

