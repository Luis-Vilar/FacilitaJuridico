module.exports = {
  CREATE_USER:
    "INSERT INTO users (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
  DELETE_USER: "DELETE FROM users WHERE id = $1",
  GET_ALL_USERS: "SELECT * FROM users",
  UPDATE_USER:
    "UPDATE users SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *",
};
