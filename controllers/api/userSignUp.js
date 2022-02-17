const router = require('express').Router();
const { User, comment, post } = require('../../models');

router.post('/', (req, res) => {
     User.create({
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         admin: req.body.admin
     })
     .then(dbUserData => {
        console.log(dbUserData);
        res.json(dbUserData);
    })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
     });
});

router.post('/login', (req, res) => {
    User.findOne({
         where: {
             email: req.body.email
         }
    }).then(dbUserData => {
         if (!dbUserData) {
             res.status(400).json({ message: 'No user with that email address!' });
             return;
         }

        const validPassword = req.body.password;

        if (!validPassword) {
             res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.admin = dbUserData.admin
            req.session.loggedIn = true;

           res.json({ user: dbUserData, message: 'You are now logged in!' });
       });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});


module.exports = router;