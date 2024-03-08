const { STATUS_CODES } = require("./app.utils");
const bodyValidatorPostClient = (req, res, next) => {
  const { name, email, phone, latitud, longitud } = req.body;
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
  if (!latitud) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "latitud is required" });
  }
  if (!longitud) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "longitud is required" });
  }
  if (typeof name !== "string") {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "name must be a string" });
  }
  if (typeof email !== "string") {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "email must be a string" });
  }
  if (!validarEmail(email)) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "email is not valid" });
  }
  if (typeof phone !== "string") {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "phone must be a string" });
  }
  if (typeof latitud !== "number") {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "latitud must be a number" });
  }
  if (typeof longitud !== "number") {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "longitud must be a number" });
  }
  next();
};
const validarEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};
module.exports = {
  bodyValidatorPostClient,
  validarEmail,
};
