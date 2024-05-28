module.exports = app => {
  const user = require("../controllers/users.controller.js"); // this is essentially a using statemement or imort  connects the files or imports librarties

  var router = require("express").Router();

  // Create a new General Item
  router.post("/", user.login);

  // Retrieve all General Items or by name
  router.get("/", user.findAll);

  // Authenticate User
  router.post("/", user.login);

  app.use("/api/user", router);
};