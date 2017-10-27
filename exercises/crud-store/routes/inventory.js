const express = require("express");
const inventoryRoutes = express.Router();
const Invetory = require("../models/inventory");

inventoryRoutes.get("/", (req, res) => {
  Inventory.find((err, inventory) => {
    if (err) return res.status(500).send(err);
    return res.send(inventory)
  });
});

inventoryRoutes.post("/", (req, res) => {
  const itemNewInventory = new Inventory(req.body);
  itemNewInventory.save((err, itemNewInventorySaved) => {
    if (err) return res.status(500).send(err);
    return res.send(itemNewInventorySaved);
  });
});

module.exports = inventoryRoutes;
