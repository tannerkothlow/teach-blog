const router = require('express').Router();
const { User, Post } = require('../models');

// /
// GET: gets all comments

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
        const posts = postData.map((posts) => posts.get({ plain: true }));
        // console.log(posts);
        posts.reverse();
        res.render('home', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;