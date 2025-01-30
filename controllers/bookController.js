const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const { name, email, password, phone_number } = req.body;
      console.log('Creating user with data:', req.body); // Log the request body
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword, phone_number });
      console.log('User created:', user); // Log the created user
      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error); // Log any errors
      res.status(400).json({ error: error.message });
    }
  },

  // Get all users
  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update user
  updateUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.update(req.body);
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};