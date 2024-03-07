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
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "An error occurred while trying to get the clients" });

    const routes = calculateRoute(clients);
    return res.status(STATUS_CODES.OK).json(routes);
  },
};
