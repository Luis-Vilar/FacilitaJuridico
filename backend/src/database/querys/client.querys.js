module.exports = {
  CREATE_CLIENT:
    "INSERT INTO users (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
  DELETE_CLIENT: "DELETE FROM users WHERE id = $1 RETURNING *",
  GET_ALL_CLIENTS: "SELECT * FROM users",
  UPDATE_CLIENT:
    "UPDATE users SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *",
  SELECT_BY_PHONE : "SELECT * FROM users WHERE phone = $1",
  SELECT_BY_EMAIL : "SELECT * FROM users WHERE email = $1",
  SELECT_BY_ID : "SELECT * FROM users WHERE id = $1",
  SELECT_BY_NAME : "SELECT * FROM users WHERE name = $1",
};
