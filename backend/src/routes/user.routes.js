const { Router } = require("express");
const userRoutes = Router();
const basePath = "/user";
const {
  create,
  deleteOne,
  getAll,
  update,
} = require("../controllers/user.controller");

const {bodyValidatorPostUser} = require("../utils/user.utils");

userRoutes.get(basePath, getAll);
userRoutes.post(basePath,bodyValidatorPostUser ,create);
userRoutes.put(basePath, update);
userRoutes.delete(basePath, deleteOne);

module.exports = userRoutes;
