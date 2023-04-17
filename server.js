const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
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

mongoose.
connect(process.env.DB_CONNECTION)
.then(() => {
    console.log('connected to datebase')
    app.listen(process.env.PORT || 9000, () => {
        console.log("app is running on port 9000")
    });
}).catch((error) => {
    console.log(error)
});

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api', affirmationsRoute);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });  

