const mongoose = require('mongoose');

const desert = new mongoose.Schema({
    dishname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    restuarent: {
        type: String,
        required: true
    }

});

const sweet = new mongoose.model('desert', desert);

module.exports = sweet;