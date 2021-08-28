const customer = require('../models/coustomer');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const creatToken = require('../common/createToken');

const customerSignup = async (req, res) => {
    let { email, password, adress } = req.body;
    console.log(req.body, "LLLLLLLL");
    const userValidationwithJoi = Joi.object({
        email: Joi.string().email().required(),
        passowrd: Joi.string().required(),
        adress: Joi.string().default('nothong').allow()
    });

    let userSchemaValidate = userValidationwithJoi.validate();
    if (userSchemaValidate.error) {
        return res.status(204)
            .json({
                status: 204,
                message: userSchemaValidate.error
            })
    } else {

    };
    const existsCustomer = await customer.findOne({ email: email });
    if (existsCustomer) {
        console.log(` you have already used email use another gmail...`);
    } else {

    }
    try {
        const hashPassword = await bcrypt.hash(password, process.env.SALT)
        const Coustomer = {
            email: email,
            password: hashPassword,
            adress: adress
        };
        const newCustomer = await customer.create(Coustomer);
        return res.status(200).json({
            status: 200,
            message: newCustomer
        });
    } catch (err) {
        console.log(err);
        return res.status(500)
            .json({
                status: 500,
                message: err
            });
    };
};


const customerLogin = async (req, res) => {
    const { email, password } = req.body;
    const validateEmail = Joi.object({
        email: Joi.string().email().required(),
        passowrd: Joi.string().required()
    });
    let logSchema = validateEmail.validate();
    if (logSchema.error) {
        return res.status(204)
            .json({
                status: 204,
                message: logSchema.error
            })
    } else {

    };
    const tokenPayload = {
        email: email,
        password: password
    };
    try {
        const coustomer = await customer.findOne({ email: req.body.email });
        const checkPassword = await bcrypt.compare(password, coustomer.password);
        const createToken = await creatToken.createToken(tokenPayload);
        console.log(createToken, "JJJJJJ");
        if (!checkPassword) {
            console.log(`password is wrong...`);
        }
        if (coustomer) {
            return res.status(200)
                .json({
                    status: 200,
                    message: `login succesfull`,
                    token: createToken
                });
        } else {
            return res.status(304)
                .json({
                    status: 304,
                    message: 'user not sign up first u have to signup'
                })
        }
    } catch (err) {
        console.log(err);
        return res.status(500)
            .json({
                status: 500,
                message: err
            });
    };
};


module.exports = {
    customerSignup,
    customerLogin
};