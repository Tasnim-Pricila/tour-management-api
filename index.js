const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require('colors');
const tourRoute  = require('./routes/tour.route');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database connection is successful!!`.red.bold)
})



app.get('/', (req, res) => {
    res.send("Tour is starting... !")
})

app.use('/api/v1/tours', tourRoute);

app.listen(port, () => {
    console.log(`App is running on port ${port}`.red.bold)
})