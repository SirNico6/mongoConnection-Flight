const express = require("express");
const flightSchema = require("../models/flight");

const router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//create
router.post("/agregarVuelo", (req, res) => {
const flight = flightSchema(req.body);
flight
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

//update one
router.put("/actualizarVuelo/:id", (req, res) => {
    const { id } = req.params;
    const { flightNum, destination, pilot } = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    flightSchema
      .updateOne({ _id: id }, { $set: { flightNum, destination, pilot } })
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

//delete one
router.delete("/eliminarVuelo/:id", (req, res) => {
    const { id } = req.params;
    res.header("Access-Control-Allow-Origin", "*");
    flightSchema
      .remove({ flightNum: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

//get one
router.get("/obtenerVuelo/:id", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
    flightSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

//get all
router.get("/obtenerVuelos", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    flightSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

module.exports = router;