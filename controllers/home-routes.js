const router = require('express').Router();
const { User, Post, Comment, Admin } = require('../models');

router.get('/posts', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'created_at',
      'updated_at'
  ]}).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('posts', { posts });
  }).catch(err => {
    res.status(500).json(err);
  });
});

router.get('/newPost', (req, res) => {
  res.render('newPost');
});

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/singlePost', (req, res) => {
  res.render('single-post');
});

module.exports = router;