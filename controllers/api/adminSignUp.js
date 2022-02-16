const router = require('express').Router();
const { Admin, comment, post } = require('../../models')

router.post('/', (req, res) => {
    Admin.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbAdminData => {
     req.session.save(() => {
       req.session.admin_id = dbAdminData.id;
       req.session.username = dbAdminData.username;
       req.session.loggedIn = true;
   
       res.json(dbAdminData);
     });
   })
     .catch(err => {
         console.log(err);
         res.status(500).json(err);
    });
   console.log(req.body);
});
router.post('/login', (req, res) => {
    Admin.findOne({
         where: {
             email: req.body.email
         }
    }).then(dbAdminData => {
         if (!dbAdminData) {
             res.status(400).json({ message: 'No user with that email address!' });
             return;
         }

        //const validPassword = dbUserData.checkPassword(req.body.password);
        const validPassword = req.body.password;

        if (!validPassword) {
             res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
             req.session.admin_id = dbAdminData.id;
             req.session.username = dbAdminData.username;
             req.session.loggedIn = true;

            res.json({ user: dbAdminData, message: 'You are now logged in!' });
        });
    });
});
module.exports = router; 