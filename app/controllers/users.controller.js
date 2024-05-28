const db = require("../models");
const User = db.user; // this must match the name retuned in the bottom of index.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config();

//These are all API CRUD methods that do the heavy lifting. this is the actual logic for the CRUD function

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a  User
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin,
    firstname: req.body.firstname,
    lastname:req.body.lastname
  });

  // Save User to the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating User."
      });
    });
};

// Retrieve User by username from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
var token;

  User.find(condition)
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


// Function to authenticate user and generate JWT token
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
var token;

  // Find user by username
  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User not found!" });
      }

      // Validate password
      //const passwordIsValid = bcrypt.compareSync(password, user.password);
      const passwordIsValid = (password == user.password);
      if (!passwordIsValid) {
        return res.status(401).send({ accessToken: null, message: "Invalid password!" });
      }
        console.log(process.env.JWT_SECRET);
      // Generate JWT token
      try {
         token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '24h' });
        // Handle token generation success
      } catch (err) {
        console.error("Error generating JWT token:", err);
        res.status(500).send({ message: "Error generating JWT token." });
      }


      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Error retrieving User." });
    });
};

