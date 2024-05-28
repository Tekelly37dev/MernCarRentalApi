const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Imports the db object from the ./app/models directory.
/*there's likely an index.js file that serves as the entry point. This file exports the db object, which contains references to database-related components such as the database connection, models, etc.

Importing db: By requiring ./app/models, you're effectively importing the db object exported from the index.js file in the models directory.

Once imported, the db object can be used to interact with the database, such as querying or saving data using the models defined in the models directory
*/
const db = require("./app/models");
// Connect to general database
db.generalDBConnection.on("open", () => {
  console.log("Connected to the general database!");
});

db.generalDBConnection.on("error", err => {
  console.log("Cannot connect to the general database!", err);
  process.exit();
});

// Connect to user database
db.userDBConnection.on("open", () => {
  console.log("Connected to the user database!");
});

db.userDBConnection.on("error", err => {
  console.log("Cannot connect to the user database!", err);
  process.exit();
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tj's General application." });
});

require("./app/routes/general.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
