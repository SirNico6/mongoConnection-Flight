const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const flightsRoutes = require("./routes/flights");

const app = express();
const port = process.env.port || 3000;

//middleware
app.use(express.json());
app.use('/api', flightsRoutes);


//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB IBMCLOUD'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port: ' + port));

