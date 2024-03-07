const { STATUS_CODES } = require("../utils/app.utils");
module.exports = {
  async getAll(req, res) {
    res.status(STATUS_CODES.OK).send("GET from user routes");
  },
  async create(req, res) {
    res.status(STATUS_CODES.CREATED).send("POST from user routes");
  },
  async update(req, res) {
    res.status(STATUS_CODES.OK).send("PUT from user routes");
  },
  async deleteOne(req, res) {
    res.status(STATUS_CODES.OK).send("DELETE from user routes");
  },
};
