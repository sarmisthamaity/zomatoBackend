const mongoose = require('mongoose');

const nonVegMeal = new mongoose.Schema({
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

const nonVMeal = new mongoose.model('nonVegiterian', nonVegMeal);

module.exports = nonVMeal;