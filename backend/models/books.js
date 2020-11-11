const mongoose = require("mongoose");
const { number } = require("prop-types");
const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    diners: {
      type: Number,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;
