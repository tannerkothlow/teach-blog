const { Comment } = require('../models');

const commentdata = [
  {
    body: 'This is your greatest post yet',
    user_id: 2,
    post_id: 2,
  },
  {
    body: 'This one isnt as good',
    user_id: 2,
    post_id: 1,
  },
  {
    body: 'you suck greg',
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;