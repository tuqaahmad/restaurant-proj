const mongoose = require("mongoose");
const { number } = require("prop-types");
const Schema = mongoose.Schema;

const deliverySchema = new Schema(
  {
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

const Delivery = mongoose.model("Delivery", deliverySchema);
module.exports = Delivery;
