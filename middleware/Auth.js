const Jwt = require('jsonwebtoken');

module.exports.checkAuthorization = (req, res, next) => {
    const tokenHearders = req.headers.authorization;
    let token = ' ';
    if (!tokenHearders) {
        return res.status(300)
            .json({
                status: 300,
                message: 'token not found'
            });
    } if (req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else {
        token = req.headers.authorization;
    };
    try {
        let decode = Jwt.verify(token, process.env.SERECT_KEY);
        next();
        console.log(decode);
        return res.status(200)
            .json({
                message: 'token verified',
                status: 200
            });
    } catch (err) {
        console.log(err);
        return res.status(401)
            .json({
                status: 401,
                error: `Internal Error || ${err}`
            });
    };
};