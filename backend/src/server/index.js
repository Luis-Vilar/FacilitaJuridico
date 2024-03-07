const express = require("express");
const app = express();
const routes = require("../routes/index");
const dotenv = require("dotenv");
const pgp = require("pg-promise")(/* options */);

class Server {
  app;
  db;
  constructor() {
    dotenv.config();
    this.db = pgp(process.env.DATABASE_URL);
    this.app = app;
    this.app.use(express.json());
    this.route(this.app);
    this.dbTestConection();

    this.port = process.env.PORT || 3000;
  }
  route(app) {
    app.use(routes);
  }
  dbTestConection() {
    return this.db
      .one("SELECT $1 AS value", 123)
      .then((data) => {
        if (data) {
          console.log("Everything is fine, the database is online");
        }
      })
      .catch((error) => {
        console.log(
          "An error occurred while trying to connect to the database:",
          error
        );
      });
  }
  getDb() {
    return this.db;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = {
  Server,
};
