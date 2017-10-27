const express = require("express");
const shirtRoutes = express.Router();
const Shirt = require("../models/shirt");

shirtRoutes.get("/", (req, res) => {
    // Get the shirts array from the database
    Shirt.find((err, shirts) => {
      if (err) return res.status(500).send(err);
      return res.send(shirts)
    });
});

//shirtRoutes.get()

shirtRoutes.post("/", (req, res) => {
  const brandNewshirt = new Shirt(req.body);
  brandNewShirt.save((err, newShirtThatWasSaved) => {
    if (err) return res.status(500).send(err);
    return res.send(newShirtThatWasSaved);
  });
});
//shirtRoutes.put()
//shirtRoutes.delete()

module.exports = shirtRoutes;
