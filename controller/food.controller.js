const Joi = require('joi');
const categorieModel = require('../models/Categorie');

module.exports.allTypesofDishes = async(req, res) => {
    const { categorie, dishname, quantity, price, restuarent, foodDescription } = req.body;
    const foodValidation = Joi.object({
        categorie: Joi.string().required(),
        dishname: Joi.string().required(),
        quantity: Joi.string().default('250 gm'),
        price: Joi.number().required(),
        restuarent: Joi.string().required(),
        foodDescription: Joi.string().default('dont know').allow()
    });
    const allTypeFood = foodValidation.validate;
    if(allTypeFood.error){
        return res.status(204).send({
            status: 204,
            message: allTypeFood.error
        });
    } else {
        
    };
    try{
        const mealD = {
            categorie: categorie,
            dishname: dishname,
            quantity: quantity,
            price: price,
            restuarent: restuarent,
            foodDescription: foodDescription
        };
        const meals = await categorieModel.create(mealD);
        return res.status(200).send({
            status: 200,
            message: meals
        })
    } catch (err) {
        console.log(err);
        return res.status(401).send({
            error: err
        });
    };
};