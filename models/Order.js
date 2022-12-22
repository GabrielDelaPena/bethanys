const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  cakes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Order", orderSchema);
