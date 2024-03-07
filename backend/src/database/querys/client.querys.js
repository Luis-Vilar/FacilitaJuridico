module.exports = {
  CREATE_CLIENT:
    "INSERT INTO clients (name, email, phone, latitud, longitud) VALUES ($1, $2, $3, $4, $5) RETURNING *",
  DELETE_CLIENT: "DELETE FROM clients WHERE id = $1 RETURNING *",
  GET_ALL_CLIENTS: "SELECT * FROM clients",
  UPDATE_CLIENT:
    "UPDATE clients SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *",
  SELECT_BY_PHONE : "SELECT * FROM clients WHERE phone = $1",
  SELECT_BY_EMAIL : "SELECT * FROM clients WHERE email = $1",
  SELECT_BY_ID : "SELECT * FROM clients WHERE id = $1",
  SELECT_BY_NAME : "SELECT * FROM clients WHERE name = $1",
};
