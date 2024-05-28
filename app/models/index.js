const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

const generalDBConnection = mongoose.createConnection(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userDBConnection = mongoose.createConnection(dbConfig.userDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = {
  mongoose: mongoose,
  generalDBConnection: generalDBConnection,
  userDBConnection: userDBConnection
};

db.general = require("./general.model.js")(generalDBConnection);
db.user = require("./users.model.js")(userDBConnection);

module.exports = db;