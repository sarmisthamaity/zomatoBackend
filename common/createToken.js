const Jwt = require('jsonwebtoken');

module.exports.createToken = (data) => {
    return object = {
        token: Jwt.sign(data, process.env.SERECT_KEY,{
            expiresIn: 12*60*60
        })
    };
};