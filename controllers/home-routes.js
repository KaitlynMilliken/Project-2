const router = require('express').Router();
const { User, post, comment, admin } = require('../models');

router.get('/posts', (req, res) => {
  const myPosts = [{
    title: "Hello"
  }, {
    title: 'hello 2'
  }];

  res.render('posts', {posts: myPosts});
});

router.get('/newPost', (req, res) => {
  res.render('newPost');
});

router.get('/', (req, res) => {
  res.render('homepage');
});
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
module.exports = router;