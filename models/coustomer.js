const mongoose = require('mongoose');

const customerModel = mongoose.Schema({
    email: {
        type: String,
        required: true
    },password: {
        type: String,
        required: true
    },
    address: {
        type: String
    }
});

const customer = new mongoose.model('customer', customerModel);

module.exports = customer;