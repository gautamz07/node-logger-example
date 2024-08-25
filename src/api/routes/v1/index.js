const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const logger = require('../../../config/logger');


const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.get('/justatest', (req, res, next) => {
  // throw Error('Issue with port')
  logger.log('error', 'my bad');
  res.json(['LISA', 'TONY', 'GINGER']);
});

module.exports = router;
