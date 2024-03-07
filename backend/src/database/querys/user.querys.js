module.exports = {
  CREATE_USER:
    "INSERT INTO users (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
};
