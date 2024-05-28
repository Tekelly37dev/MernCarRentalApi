module.exports = app => {
  const generalItems = require("../controllers/general.controller.js"); // this is essentially a using statemement or imort  connects the files or imports librarties

  var router = require("express").Router();

  // Create a new General Item
  router.post("/", generalItems.create);

  // Retrieve all General Items
  router.get("/", generalItems.findAll);

  // Retrieve all published General Items
  router.get("/published", generalItems.findAllPublished);

  // Retrieve a single General Item with id
  router.get("/:id", generalItems.findOne);

  // Update a General Item with id
  router.put("/:id", generalItems.update);

  // Delete a General Item with id
  router.delete("/:id", generalItems.delete);

  // Create a new General Item
  router.delete("/", generalItems.deleteAll);

  app.use("/api/generalItems", router);
};
