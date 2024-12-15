const express = require('express');
const router = express.Router();
const User = require('../user-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Helper function to authenticate user with JWT
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'hellomoto'); // Verify JWT token
    req.user = decoded; // Attach user data to request
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

// Existing route for signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: 'User created successfully',
      user: {
        username: newUser.username,
        email: newUser.email,

      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login route (using JWT for authentication)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the entered password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      'hellomoto', // Replace with a secure secret key
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Send a success response with the token and user info
    return res.status(200).json({
      message: 'Login successful',
      token: token,
      user: {
        username: user.username, // Use the username from the user object
        email: user.email,

      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});






module.exports = router;
