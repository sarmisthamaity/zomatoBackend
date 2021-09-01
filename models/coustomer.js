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
        type: String,
        required: true
    }
});

const customer = new mongoose.model('customer', customerModel);

module.exports = customer;