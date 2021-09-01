const { typeOfController } = require('../controller/index');
const router = require('express').Router();

router.post('/typesOfFoods', typeOfController.allTypesofDishes);

module.exports = router;