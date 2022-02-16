const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', (req, res) => {
    // Comment.create({
    //     title: req.body.title,
    //     user_id: req.session.user_id,
    //     post_id: req.body.post_id
    // })
    //     .then(dbUserData => res.json(dbUserData))
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });
});

module.exports = router;