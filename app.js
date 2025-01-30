require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Request Headers:', req.headers);
  console.log('Request Body:', req.body);
  next();
});

// Use the routes for handling endpoints
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

// Default route (just to check if server is running)
app.get('/', (req, res) => {
  res.send('Pustak Bhandar server is up and running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Pustak Bhandar server is running on port ${PORT}`);
});