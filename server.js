const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv/config');
const affirmationsRoute = require('./routes/affirmations.routes');

const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(
        cors({
            origin: '*',
            credentials: true,
        })
    );
};

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api', affirmationsRoute);

mongoose.
connect(process.env.DB_CONNECTION)
.then(() => {
    console.log('connected to datebase')
    app.listen(9000, () => {
        console.log("app is running on port 9000")
    });
}).catch((error) => {
    console.log(error)
});