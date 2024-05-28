module.exports = connection => {
  const { Schema } = require("mongoose");
  const schema = Schema(
    {
      username: String,
      email: String,
      password: String,
      admin: Boolean,
      firstname: String,
      lastname: String
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = connection.model("users", schema);

  return User;
};