const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  mongoose.set("useCreateIndex", true);

  mongoose
    .connect("mongodb://localhost/coolshop", { useNewUrlParser: true })
    .then(() => console.log("Connectiong to MongoDB"));
};
