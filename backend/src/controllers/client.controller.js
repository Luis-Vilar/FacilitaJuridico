const { STATUS_CODES } = require("../utils/app.utils");
const {
  CREATE_CLIENT,
  GET_ALL_CLIENTS,
  UPDATE_CLIENT,
  DELETE_CLIENT,
} = require("../database/querys/client.querys");
const db = require("../database/db.conection");
module.exports = {
  async getAll(req, res) {
    const users = await db.query(GET_ALL_CLIENTS).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (users) return res.status(STATUS_CODES.OK).json(users);
    else
      return res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "An error occurred while trying to get the users" });
  },
  async create(req, res) {
    const { name, email, phone } = req.body;
    const user = await db
      .query(CREATE_CLIENT, [name, email, phone])
      .then((res) => {
        if (Object.keys(res).length === 0) {
          return null;
        } else {
          return res;
        }
      });
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
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const user = await db
      .query(UPDATE_CLIENT, [name, email, phone, id])
      .then((res) => {
        if (Object.keys(res).length === 0) {
          return null;
        } else {
          return res;
        }
      });

    if (user) {
      return res
        .status(STATUS_CODES.OK)
        .json({ message: "The user has been updated", user });
    } else {
      return res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "An error occurred while trying to update the user" });
    }
  },
  async deleteOne(req, res) {
    const { id } = req.params;
    const userDeleted = await db.query(DELETE_CLIENT, [id]).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (userDeleted) {
      return res
        .status(STATUS_CODES.OK)
        .json({ message: "The next user has been deleted", user: userDeleted });
    } else {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({
          message: `The user with id : ${id} does not exist in the database`,
        });
    }
  },
};
