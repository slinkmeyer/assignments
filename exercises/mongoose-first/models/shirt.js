const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shirtsSchema = new Schema({
  character: {
    type: String,
    required: true,
    lowercase: true
  },
  price: Number,
  colorOptions: [String],
  sizeOptions: [String],
  tiger: {
    type: Boolean,
    default: false
  },
  fur: {
    long: Boolean,
    kind: String,
    glowIntheDark: {
      type: Boolean,
      default: true
    }
  }
});

const Shirt = mongoose.model("shirt", shirtsSchema);
module.exports = Shirt;
//OR
//module.exports = mongoose.model("Cat", catSchema);
