const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/duck-shirts", (err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.use("/shirts", require("./routes/shirt"));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
