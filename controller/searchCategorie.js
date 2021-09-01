const categorieModel = require('../models/Categorie');
const addcartModel = require('../models/addcart');

const searchCategorie = async (req, res) => {
    const { categorie } = req.query;
    try {
        const restuarant = await categorieModel
            .find({ categorie: categorie },
                {
                    "restuarent": 1,
                    "_id": 0
                });
        console.log(restuarant);
        return res.status(200)
            .json({
                status: 200,
                restuarant
            });
    } catch (err) {
        console.log(err);
        return res.status(401)
            .json({
                status: 401,
                message: 'Internal error '
            });
    };
};


const varietyOfDishes = async (req, res) => {
    const { restuarent } = req.query;
    try {
        const searchFood = await categorieModel
            .find({ restuarent: restuarent },
                {
                    "dishname": 1,
                    "_id": 0,
                    "price": 1,
                    "quantity": 1,
                    "foodDescription": 1
                });

        return res.status(200)
            .send({
                status: 200,
                searchFood
            });
    } catch (err) {
        console.log(err);
        return res.status(401)
            .send({
                status: 401,
                error: err
            });
    };
};


const addtoCart = async (req, res) => {
    const { restuarent, dish } = req.query;
    try {
        const foodDetails = await categorieModel.findOne({ restuarent: restuarent }
            && { dishname: dish }, {
            "categorie": 0,
            "_id": 0,
            "__v": 0
        });
        console.log(foodDetails);
        const selectFood = {
            dishName: foodDetails.dishname,
            quantity: foodDetails.quantity,
            price: foodDetails.price,
            foodDescription: foodDetails.foodDescription,
            // address: req.body.address
        };
        let savetoAddcart = await addcartModel.create(selectFood);
        return res.status(200).json({
            status: 200,
            message: 'ordered placed',
            savetoAddcart
        });
    } catch (err) {
        console.log(err);
        return res.status(401)
            .json({
                status: 401,
                err: err
            });
    };
};





module.exports = {
    searchCategorie,
    varietyOfDishes,
    addtoCart
};