const express = require("express");
const next = require("next");

const nextApp = next({ dev: true });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(async () => {
    const app = express();

    app.get("/", (req, res) => {
      nextApp.render(req, res, "/index");
    });

    app.get("*", (req, res) => {
      handle(req, res);
    });

    app.listen(8080, () => {
      console.log("Server listening on port 8080.");
    });
  })
  .catch(err => {
    console.error("Server crashed:");
    console.error(err);
  });

module.exports = nextApp;
