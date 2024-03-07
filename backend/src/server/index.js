const express = require("express");
const app = express();
const routes = require("../routes/index");

class Server {
  app;
  constructor() {
    this.app = app;
    this.app.use(express.json());
    this.route(this.app);
    this.port = process.env.PORT || 3000;
  }
  route(app) {
    app.use(routes);
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
