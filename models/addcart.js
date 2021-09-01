const mongoose = require('mongoose');

const addCartFood = new mongoose.Schema({
    dishName: {
        type: String
    },quantity: {
        type: Number
    },price: {
        type: Number
    },foodDescription: {
        type: String
    },address: {
        type: String
    }
});  
                    
const addcart = new mongoose.model('addcart', addCartFood);

module.exports = addcart;                             