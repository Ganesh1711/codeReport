const mongoose = require("mongoose");

const strSchema = new mongoose.Schema(
  {
    s: { type: Array, required: true }
  });

module.exports = mongoose.model("Str", strSchema);
