module.exports = connection => {
  const { Schema } = require("mongoose");
  const schema = Schema(
    {
      name: String,
      image: String,
      description: String,
      link: String
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // Use the provided connection to create the model
  const General = connection.model("general", schema);

  return General;
};
