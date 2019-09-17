const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var articleSchema = new Schema({
  headline: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  imageURL: {
    type: String,
    required: true
  }
});

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;
