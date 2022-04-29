const router = require('express').Router();
const userController = require('./users.controller');

router.post('/characters/create', userController.createUserController);
router.get('/characters', userController.findAllUserController);

module.exports = router;
