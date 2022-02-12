const router = require('express').Router();

router.post('/test', (req, res) => {
    console.log("ya submitted!");
});

module.exports = router;