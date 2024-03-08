require("dotenv").config()
const express = require("express");
const app = express();
const router = require("../routes/index");
const cors = require("cors");

const db = require("../database/db.conection");

class Server {
  app;
  constructor() {
    this.app = app;
    this.app.use(express.json());
    this.app.use(cors());
    this.route(this.app);
    this.dbTestConection();
    this.port = process.env.PORT || 3000;
  }
  route(app) {
    app.use(router);
  }
  dbTestConection() {
     db
      .one("SELECT $1 AS value", 123)
      .then((data) => {
        if (data) {
          console.log("Everything is fine, the database is online");
        }
      })
      .catch((error) => {
        console.log(
          "An error occurred while trying to connect to the database: ",
          error
        );
      });
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
