const router = require('express').Router();

const userRoutes = require('./userSignUp');
const postRoutes = require('./posts');
const commentRoutes = require('./comment')
const adminRoutes = require('./adminSignUp')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);
router.use('/admin', adminRoutes);

module.exports = router;