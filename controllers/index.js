const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const registerRoutes = require('./registerRoutes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/register', registerRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
