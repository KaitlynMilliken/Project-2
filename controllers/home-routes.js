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
  res.render('user-login');
});
router.get('/', (req, res) => {
  console.log(req.session);
  res.render('admin-login')
})
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'description',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }

        const post = dbPostData.get({ plain: true });
        console.log(post);
        
        res.render('single-post', { post });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;