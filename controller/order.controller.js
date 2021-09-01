const customerModel = require('../models/coustomer');
const addcart = require('../models/addcart');
const Joi = require('joi');

const oderPlaced = async(req, res) => {
    try{ 
        const findCoustomer = await customerModel.findOne({email: req.body.email})
        
        return res.status(200).json({
            status: 200,
            data: location
        })
    } catch (err) {
        console.log(err);
        return res.status(401)
        .send({
            status: 401,
            err: err
        });
    };
};

const paymentOption = async(req, res) => {
    const {phonePay, cashOn} = req.query;
    const payValidation = Joi.object({
        upiCode: Joi.number().required()
    });
    const validPay = payValidation.validate(req.body);
    if(validPay.error){
        return res.status(204).json({
            status: 204,
            error: validPay.error.details[0].message 
        })
    } else {

    }
    try{
        
    } catch(err){
        console.log(err);
        return res.status(401)
        .json({
            status: 401,
            error: err
        });
    };
};