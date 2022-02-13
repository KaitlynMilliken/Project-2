const router = require('express').Router();
const { Post } = require('../../models');

router.post('/newPost', (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    console.log(req.body);
});

module.exports = router;