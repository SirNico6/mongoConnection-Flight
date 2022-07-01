const express = require("express");
const flightSchema = require("../models/flight");

const router = express.Router();

//create
router.post("/agregarVuelo", (req, res) => {
    const flight = flightSchema(req.body);
    flight
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error}));
});

//update one
router.put("/actualizarVuelo/:id", (req, res) => {
    const { id } = req.params;
    const { flightNum, destination, pilot } = req.body;
    flightSchema
      .updateOne({ _id: id }, { $set: { flightNum, destination, pilot } })
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

//delete one
router.delete("/eliminarVuelo/:id", (req, res) => {
    const { id } = req.params;
    flightSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

//get one
router.get("/obtenerVuelo/:id", (req, res) => {
    const { id } = req.params;
    flightSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

//get all
router.get("/obtenerVuelos", (req, res) => {
    flightSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
});

module.exports = router;