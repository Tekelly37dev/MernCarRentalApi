/*
The code module.exports = { url: "mongodb://localhost:27017/bezkoder_db" }; is exporting an object containing a MongoDB connection URL.

In Node.js, module.exports is a special object that is included in every JavaScript file in the Node.js application by default. It is used to define what a file/module exports and makes available for other modules to require.

In this specific case:

module.exports is assigned an object { url: "mongodb://localhost:27017/bezkoder_db" }.
This object contains a single key-value pair where:
Key: url
Value: "mongodb://localhost:27017/bezkoder_db"
The value assigned to the url key is a MongoDB connection string. This connection string specifies the address of the MongoDB server (localhost), the port number (27017), and the name of the MongoDB database (bezkoder_db) that the application will connect to.

This export statement is typically used in Node.js applications to encapsulate the database connection details in a single file so that they can be easily imported and reused in other parts of the application, such as when establishing a connection to the database using a MongoDB driver like Mongoose.*

Remember the connection string comes from mongo db itself. you can find it when you open the Mongo compass app. Jiust provide the table name
make sure the mongo server is ruinning and then insert a test document
*/

module.exports = {
  url: "mongodb://localhost:27017/general_db",
  userDBUrl: "mongodb://localhost:27017/user_db"
};
