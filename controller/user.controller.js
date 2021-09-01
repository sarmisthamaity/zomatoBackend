const customer = require('../models/coustomer');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const creatToken = require('../common/createToken');
const mailSender = require('../common/mailer');

const customerSignup = async (req, res) => {
    let { email, password, adress } = req.body;
    const userValidationwithJoi = Joi.object({
        email: Joi.string().email().required(),
        passowrd: Joi.string().required(),
        adress: Joi.string().default('nothong').allow()
    });

    let userSchemaValidate = userValidationwithJoi.validate(req.body);
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

    };
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
        passowrd: Joi.string().required(),
        address: Joi.string().required()
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
        email: email
    };
    try {
        const coustomer = await customer.findOne({ email: req.body.email });
        const checkPassword = await bcrypt.compare(password, coustomer.password);
        const createToken = await creatToken.createToken(tokenPayload);
        const maildata = {
            from: 'sarmistha20@navgurukul.org',
            to: req.body.email,
            subject: 'Welcome To Food Delivery App',
            text: ''
        };
        var Appmail = await mailSender.mail(maildata);
        if (checkPassword) {
            return res.status(200)
                .json({
                    status: 200,
                    message: `login succesfull`,
                    token: createToken,
                    data: 'mail sended to new User'
                });
        }
        else {
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