const mongoose = require("mongoose");
const Schema = require mongoose.Schema;

const inventorySchema = new Schema({
  item: {
    type: String,
    required: true,
    lowerCase: true,
  },
  price: Number,
  colorOptions: [String],
  sizeOptions: [String],
  gender: enums,
  material: [String],
  sale: Boolean
});

const Inventory = mongoose.model("inventory", inventorySchema);
module.exports = Inventory;
