require('dotenv').config();
const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://sarmi:Sarmi1434@cluster0.3drtl.mongodb.net/foodApp?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, ({
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority",
})).then(() => {
    console.log(`database connect succesfully`);
}).catch((err) => {
    console.log(`not connected...`, err);
});

mongoose.Promise = global.Promise;
module.exports = mongoose;