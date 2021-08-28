const { foodController } = require('../controller/index');
const router = require('express').Router();

router.post('/deserts', foodController.Deserts);

router.post('/fastFood', foodController.fastFoodDishes);
router.post('/nonVeg', foodController.nonvegDishes);
router.post('/vegiterian', foodController.vegDishes);

module.exports = router;