const { Router } = require("express");
const userRoutes = Router();
const basePath = "/user";
const {
  create,
  deleteOne,
  getAll,
  update,
} = require("../controllers/user.controller");

userRoutes.get(basePath, getAll);
userRoutes.post(basePath, create);
userRoutes.put(basePath, update);
userRoutes.delete(basePath, deleteOne);

module.exports = userRoutes;
