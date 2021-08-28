const { coustomer } = require('../controller/index');
const router = require('express').Router();

router.post('/signup', coustomer.customerSignup);

router.post('/login', coustomer.customerLogin);

module.exports = router;