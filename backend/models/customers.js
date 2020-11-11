const mongoose = require("mongoose");
const { number } = require("prop-types");
const Schema = mongoose.Schema;

const customersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Customers = mongoose.model("Customers", customersSchema);
module.exports = Customers;
