const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/inventory", (err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.use("/inventory", require("./routes/inventory"));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
