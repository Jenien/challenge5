const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/cars', require('./car.routes'));

module.exports = router;
