const { STATUS_CODES } = require("../utils/app.utils");
const {
  CREATE_CLIENT,
  GET_ALL_CLIENTS,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  SELECT_BY_EMAIL,
  SELECT_BY_NAME,
  SELECT_BY_PHONE,
  SELECT_BY_ID,
} = require("../database/querys/client.querys");
const db = require("../database/db.conection");
module.exports = {
  async getAll(req, res) {
    const client = await db.query(GET_ALL_CLIENTS).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (client) return res.status(STATUS_CODES.OK).json(client);
    else
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: "No clients get in the database, please first insert one.." });
  },
  async create(req, res) {
    const { name, email, phone, latitud, longitud } = req.body;
    const existingClient = await db.query(SELECT_BY_EMAIL, [email]);
    if (Object.keys(existingClient).length !== 0) {
      return res.status(STATUS_CODES.CONFLICT).json({
        message: `The client with email : ${email} already exists`,
      });
    }
    const client = await db
      .query(CREATE_CLIENT, [name, email, phone, latitud, longitud])
      .then((res) => {
        if (Object.keys(res).length === 0) {
          return null;
        } else {
          return res;
        }
      });
    if (client)
      return res
        .status(STATUS_CODES.CREATED)
        .json({ message: "A new client has by created", client });
    else
      return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
        message: "An error occurred while trying to insert the client",
      });
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const client = await db
      .query(UPDATE_CLIENT, [name, email, phone, id])
      .then((res) => {
        if (Object.keys(res).length === 0) {
          return null;
        } else {
          return res;
        }
      });

    if (client) {
      return res
        .status(STATUS_CODES.OK)
        .json({ message: "The client has been updated", client });
    } else {
      return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
        message: "An error occurred while trying to update the client",
      });
    }
  },
  async deleteOne(req, res) {
    const { id } = req.params;
    const clientDeleted = await db.query(DELETE_CLIENT, [id]).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (clientDeleted) {
      return res
        .status(STATUS_CODES.OK)
        .json({ message: "The next client has been deleted", clientDeleted });
    } else {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        message: `The client with id : ${id} does not exist in the database`,
      });
    }
  },
  async findByEmail(req, res, next) {
    const { email } = req.query;
    if (!email) {
      return next();
    }
    const client = await db.query(SELECT_BY_EMAIL, [email]).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (client) {
      return res.status(STATUS_CODES.OK).json(client);
    } else {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: `The client with email : ${email} does not exist` });
    }
  },
  async findByName(req, res, next) {
    const { name } = req.query;
    if (!name) {
      return next();
    }
    nameLowerCase = name.toLowerCase();
    nameCapitalized =
      nameLowerCase.charAt(0).toUpperCase() + nameLowerCase.slice(1);

    const client = await db
      .query(SELECT_BY_NAME, [`%${nameLowerCase}%`, `%${nameCapitalized}%`])
      .then((res) => {
        if (Object.keys(res).length === 0) {
          return null;
        } else {
          return res;
        }
      });
    if (client) {
      return res.status(STATUS_CODES.OK).json(client);
    } else {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: `The client with name : ${name} does not exist` });
    }
  },
  async findByPhone(req, res, next) {
    const { phone } = req.query;
    if (!phone) {
      return next();
    }
    const client = await db.query(SELECT_BY_PHONE, [phone]).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (client) {
      return res.status(STATUS_CODES.OK).json(client);
    } else {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: `The client with phone : ${phone} does not exist` });
    }
  },
  async findById(req, res) {
    const { id } = req.params;
    const client = await db.query(SELECT_BY_ID, [id]).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (client) {
      return res.status(STATUS_CODES.OK).json(client);
    } else {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: `The client with id : ${id} does not exist` });
    }
  },
};
