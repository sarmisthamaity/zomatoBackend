const mongoose = require('mongoose');

const fastFood = new mongoose.Schema({
    dishname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    restuarent: {
        type: String,
        required: true
    }

});

const streetFood = new mongoose.model('fastFood', fastFood);

module.exports = streetFood;