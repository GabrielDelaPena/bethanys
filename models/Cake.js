const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cakeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      min: 6,
      max: 290,
    },
    category: {
      type: String,
      required: true,
      min: 6,
      max: 290,
    },
    imageUrl: {
      type: String,
      min: 6,
      max: 290,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cake", cakeSchema);
