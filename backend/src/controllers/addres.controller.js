const { GET_ALL_CLIENTS } = require("../database/querys/client.querys");
const { STATUS_CODES } = require("../utils/app.utils");
const db = require("../database/db.conection");
const { calculateRoute } = require("../utils/addres.utils");
module.exports = {
  async getBestRoutes(req, res) {
    const clients = await db.query(GET_ALL_CLIENTS).then((res) => {
      if (Object.keys(res).length === 0) {
        return null;
      } else {
        return res;
      }
    });
    if (!clients)
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: "Not clients found in the database" });

    const routes = calculateRoute(clients);
    return res.status(STATUS_CODES.OK).json(routes);
  },
};
