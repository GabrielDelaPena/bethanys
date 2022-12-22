const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    username: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    street: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    zip: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    city: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    basket: {
      type: Array,
      default: [],
    },
    orders: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
