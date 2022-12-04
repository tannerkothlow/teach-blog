const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// /:id
// GET: gets post by ID and brings its comments along
// POST: adds a comment

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['body', 'date_created'],
                    include: [
                        {
                            model: User,
                            attributes: ['username'],
                        },
                    ],
                },
            ],
        });
        const post = postData.get({ plain: true });
        
        console.log(post);
        res.render('post', {post})
    } catch (err) {
        res.status(500).json(err);
    }
});

// /
// GET: returns the login page
// POST: adds your comment

module.exports = router;