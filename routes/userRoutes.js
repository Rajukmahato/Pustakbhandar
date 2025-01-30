const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

// User registration
router.post('/register', userController.createUser);

// User login
router.post('/login', authController.login);

// Get all users (protected route)
router.get('/', auth, userController.getUsers);

// Update user (protected route)
router.put('/:id', auth, userController.updateUser);

// Delete user (protected route)
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;