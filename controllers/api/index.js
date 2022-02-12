const router = require('express').Router();

const userRoutes = require('./userSignUp');

router.use('/users', userRoutes);

module.exports = router;