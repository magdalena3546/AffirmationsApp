const mongoose = require('mongoose');

const affirmationSchema = new mongoose.Schema({
   content: {
        type: String,
        required: [true, "Please enter content of affirmation"]
    },
    author: {
        type: String,
        required: false
    }
});

const Affirmation = mongoose.model('Affirmation', affirmationSchema);
module.exports = Affirmation;