const { STATUS_CODES } = require("../utils/app.utils");
const { CREATE_USER,GET_ALL_USERS  } = require("../database/querys/user.querys");
const db = require("../database/db.conection");
module.exports = {
  async getAll(req, res) {
    const users = await db.query(GET_ALL_USERS);
    if (users) return res.status(STATUS_CODES.OK).json(users);
    else
      return res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "An error occurred while trying to get the users" });
  },
  async create(req, res) {
    const { name, email, phone } = req.body;
    const user = await db.query(CREATE_USER, [name, email, phone]);
    if (user)
      return res
        .status(STATUS_CODES.CREATED)
        .json({ message: "A new user has by created", user });
    else
      return res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "An error occurred while trying to insert the user" });
  },
  async update(req, res) {
    res.status(STATUS_CODES.OK).send("PUT from user routes");
  },
  async deleteOne(req, res) {
    res.status(STATUS_CODES.OK).send("DELETE from user routes");
  },
};
