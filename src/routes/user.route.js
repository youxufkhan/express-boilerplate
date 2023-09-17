const router = require('express').Router();
const { userController } = require('../controllers');

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getUsers);



module.exports = router;
