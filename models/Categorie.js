const mongoose = require('mongoose');

const dishes = new mongoose.Schema({
    categorie: {
        type: String,
        required: true
    },
    dishname: {
        type: String,
        required: true
    },
    quantity: {
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
    },
    foodDescription: {
        type: String
    }

});

const streetFood = new mongoose.model('foods', dishes);

module.exports = streetFood;