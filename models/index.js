const User = require('./User');
const Admin = require('./admin');
const Post = require('./post');
const Comment = require('./comment');

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Admin, Post, Comment };

