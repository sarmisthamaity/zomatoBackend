const vegModule = require('../models/vegan');
const nonvegModule = require('../models/nonveg');
const sweetModule = require('../models/sweet');
const streetFood = require('../models/fastfood');
const Joi = require('joi');

const vegDishes = async(req, res) => {
    const { dishname, price, restuarent } = req.body;
    const vegValidation = Joi.object({
        dishname: Joi.string().required(),
        price: Joi.number().required(),
        restuarent: Joi.string().required()
    });
    const vegan = vegValidation.validate;
    if(vegan.error){
        return res.status(204).send({
            status: 204,
            message: vegValidation.error
        });
    } else {

    };
    try{
        const vegmeal = {
            dishname: dishname,
            price: price,
            restuarent: restuarent
        };
        const postvegmeal = await vegModule.create(vegmeal);
        return res.status(200).send({
            status: 200,
            message: postvegmeal
        })
    } catch (err) {
        console.log(err);
        return res.status(401).send({
            error: err
        });
    };
};

const nonvegDishes = async(req, res) => {
    const { dishname, price, restuarent } = req.body;
    const nonVegValidation = Joi.object({
        dishname: Joi.string().required(),
        price: Joi.number().required(),
        restuarent: Joi.string().required()
    });
    const NVegValidation = nonVegValidation.validate;
    if(NVegValidation.error){
        return res.status(204).send({
            status: 204,
            message: nonVegValidation.error
        });
    } else {

    }
    try{
        const nonvegmeal = {
            dishname: dishname,
            price: price,
            restuarent: restuarent
        };
        const postNonVegmeal = await nonvegModule.create(nonvegmeal);
        return res.status(200).send({
            status: 200,
            message: postNonVegmeal
        })
    } catch (err) {
        console.log(err);
        return res.status(401).send({
            error: err
        });
    };
};


const Deserts = async(req, res) => {
    const { dishname, price, restuarent } = req.body;
    const desertsValidation = Joi.object({
        dishname: Joi.string().required(),
        price: Joi.number().required(),
        restuarent: Joi.string().required()
    });
    const desertValidation = desertsValidation.validate;
    if(desertValidation.error){
        return res.status(204).send({
            status: 204,
            message: desertsValidation.error
        });
    } else {

    }
    try{
        const deserts = {
            dishname: dishname,
            price: price,
            restuarent: restuarent
        };
        const postsweets = await sweetModule.create(deserts);
        console.log(postsweets, "KKKKK");
        return res.status(200).send({
            status: 200,
            message: postsweets
        })
    } catch (err) {
        console.log(err);
        return res.status(401).send({
            error: err
        });
    };
};


const fastFoodDishes = async(req, res) => {
    const { dishname, price, restuarent } = req.body;
    const fastFoodValidation = Joi.object({
        dishname: Joi.string().required(),
        price: Joi.number().required(),
        restuarent: Joi.string().required()
    });
    const fastfoodValidate = fastFoodValidation.validate;
    if(fastfoodValidate.error){
        return res.status(204).send({
            status: 204,
            message: fastFoodValidation.error
        });
    } else {

    }
    try{
        const fastfood = {
            dishname: dishname,
            price: price,
            restuarent: restuarent
        };
        const postfastFood = await streetFood.create(fastfood);
        return res.status(200).send({
            status: 200,
            message: postfastFood
        })
    } catch (err) {
        console.log(err);
        return res.status(401).send({
            error: err
        });
    };
};

module.exports = {
    vegDishes,
    nonvegDishes,
    Deserts,
    fastFoodDishes
};