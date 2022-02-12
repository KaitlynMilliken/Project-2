const router = require('express').Router();

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

module.exports = router;