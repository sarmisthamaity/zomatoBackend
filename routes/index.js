const router = require('express').Router();
const routeUser = require('./users.route');
const foods = require('./foods.route');
const searchCatagorie = require('./search.route');


router.use('/', routeUser);
router.use('/', foods);
router.use('/', searchCatagorie);

module.exports = router;