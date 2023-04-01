const express = require('express');
const mongoose = require('mongoose');
require ('dotenv/config');
const affirmationsRoute = require('./routes/affirmations.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api', affirmationsRoute);

mongoose.
connect(process.env.DB_CONNECTION)
.then(() => {
    console.log('connected to datebase')
    app.listen(3000, () => {
        console.log("app is running on port 3000")
    });
}).catch((error) => {
    console.log(error)
});