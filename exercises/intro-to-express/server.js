const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const uuid = require("uuid/v4");

app.use(bodyParser.json());

const cats = [
  {title: "meow cat", color: "black"},
  {title: "tabby cat", color: "orange"},
  {title: "Maine Coon", color: "white"}
];

//"https://swapi.co/api/v1/people/1"

app.get("/cats", (req, res) => {
  res.send(cats);
});

app.post("/cats", (req, res) => {
  let cat = req.body;
  cat._id = uuid();
  cats.push(req.body);
  res.send(cat);
  //OR
  //
});
//
// app.put()
//
// app.delete()

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
