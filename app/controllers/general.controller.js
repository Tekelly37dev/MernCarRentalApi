const db = require("../models");
const General = db.general;

//These are all API CRUD methods that do the heavy lifting. this is the actual logic for the CRUD function

// Create and Save a new General Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a General Item
  const general = new General({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  });

  // Save General Item in the database
  general
    .save(general)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the General Item."
      });
    });
};

// Retrieve all General Items from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  General.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving General Items."
      });
    });
};

// Find a single General Item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  General.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found General Item with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving General Item with id=" + id });
    });
};

// Update a General Item by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  General.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update General Item with id=${id}. Maybe General Item was not found!`
        });
      } else res.send({ message: "General Item was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating General Item with id=" + id
      });
    });
};

// Delete a General Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  General.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete General Item with id=${id}. Maybe General Item was not found!`
        });
      } else {
        res.send({
          message: "General Item was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete General Item with id=" + id
      });
    });
};

// Delete all General Items from the database.
exports.deleteAll = (req, res) => {
  General.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} General Items were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all General Items."
      });
    });
};

// Find all published General Items
exports.findAllPublished = (req, res) => {
  General.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving General Items."
      });
    });
};
