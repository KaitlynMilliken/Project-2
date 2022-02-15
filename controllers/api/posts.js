const router = require('express').Router();
const { Post } = require('../../models');

router.post('/newPost', (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;