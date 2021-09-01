const { catagories } = require('../controller/index');
const router = require('express').Router();

router.get('/Catagories', catagories.searchCategorie);
router.get('/dishes', catagories.varietyOfDishes);
router.get('/addcart', catagories.addtoCart);

module.exports = router;
