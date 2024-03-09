const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  data: String,
});

const ReviewModel = mongoose.model("review", ReviewSchema);
module.exports = ReviewModel;
