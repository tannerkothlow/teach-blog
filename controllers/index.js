const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const registerRoutes = require('./registerRoutes');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/register', registerRoutes);

module.exports = router;
