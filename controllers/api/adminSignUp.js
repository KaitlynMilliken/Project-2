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

module.exports = router; 