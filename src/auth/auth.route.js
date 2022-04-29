const router = require('express').Router();

const authController = require('./auth.controller');

router.post('auth/login', authController.loginController);

module.exports = router;
