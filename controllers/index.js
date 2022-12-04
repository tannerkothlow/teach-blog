const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');

router.use('/home', homeRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);

module.exports = router;
