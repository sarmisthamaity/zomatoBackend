const mongoose = require('mongoose');

const vegMeal = new mongoose.Schema({
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

const VMeal = new mongoose.model('vegiterian', vegMeal);

module.exports = VMeal;