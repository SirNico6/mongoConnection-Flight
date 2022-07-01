const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
    flightNum: {
        type: Number,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    pilot: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Flight', flightSchema);