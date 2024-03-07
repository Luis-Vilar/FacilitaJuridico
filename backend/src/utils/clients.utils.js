const { STATUS_CODES } = require("./app.utils");
module.exports = {
  bodyValidatorPostClient: (req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ message: "name is required" });
    }
    if (!email) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ message: "email is required" });
    }
    if (!phone) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ message: "phone is required" });
    }
    if(typeof name !== "string"){
      return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "name must be a string" });
    }
    if(typeof email !== "string"){
      return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "email must be a string" });
    }
    if(typeof phone !== "string"){
      return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "phone must be a string" });
    }
    next();
  },
};
