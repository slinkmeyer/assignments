const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const uuid = require("uuid/v4");

app.use(bodyParser.json());

let bountyList = [
{
  first_name: "Jar Jar",
  last_name: "Binks",
  living: true,
  type: "Sith Lord",
  reason: "Do you honestly need a reason?",
  bounty: "$4,000,000",
  _id: uuid()
},
{
  first_name: "Steven",
  last_name: "Spielberg",
  living: true,
  type: "fat guy",
  reason: "Murdering a franchise",
  bounty: "$50",
  _id: uuid()
},
{
  first_name: "Ewoks",
  last_name: "Ewokson",
  Living: true,
  Type: "turd",
  Reason: "each Ewok is 4 micro-Jar-Jars in idiocy",
  Bounty: "$20 per Ewok",
  _id: uuid()
}
];

app.get("/bountyList", (req, res) => {
  res.send(bountyList);
});

app.post("/bountyList", (req, res) => {
  let bounty = req.body;
  bounty._id = uuid();
  bountyList.push(req.body);
  res.send(bountyList[bountyList.length-1]);
});

app.delete("/bountyList/:id/", (req, res) => {
  console.log(req.params);
  bountyList = bountyList.filter((bounty) => {
    return bounty._id !== req.params.id
  });
  res.send({
    message: "ITEM REMOVED"
  });
});

app.put("/bountyList/:id", (req, res) => {
  let newBounty = req.body
  bountyList = bountyList.map((bounty) => {
    if(bounty._id === req.params.id){
      return newBounty = Object.assign(bounty, newBounty);
    } else {
      return bounty
    };
  });
  res.send(newBounty)
});

app.get("/bountyList/:id", (req, res) => {
    let bounty = bountyList.find((bounty) => {
      if (bounty._id === req.params.id){
        return true;
      } else {
        return false
      };
    });
    res.send(bounty);
});

app.listen(8000, () => {
  console.log("Server is running.");
});
