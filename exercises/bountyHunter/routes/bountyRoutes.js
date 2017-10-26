const app = express();
const bodyParser = require("body-parser");
const uuid = require ("uuid/v4");

app.use(bodyParser.json());

app.use("./bountyList", require("./routes/bountyRoutes"));

app.listen(8000, () => {
  console.log("Server is serving on port 8000");
})
const express = require("express");
const bountyRoutes = express.Router();

bountyRoutes.get("/", (req, res) => {
  res.send("GET bountyList");
});

bountyRoutes.get("/:id", (req, res) => {
  res.send("GET ONE bounty");
});

bountyRoutes.post("/", (req, res) => {
  res.send("POST bountyList");
});
