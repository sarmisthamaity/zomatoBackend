const router = require('express').Router();
const routeUser = require('./users.route');
const foodRoute = require('./food.route');

router.use('/', routeUser);
router.use('/', foodRoute);

module.exports = router;