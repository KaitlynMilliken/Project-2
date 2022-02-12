const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('userSignUp');
});

router.get('/signup', (req,res) => {
    console.log("woo!");
});

module.exports = router;