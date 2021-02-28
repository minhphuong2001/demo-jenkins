const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is invalid."],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Category description is invalid."],
  },
});

module.exports = mongoose.model("category", categorySchema);
