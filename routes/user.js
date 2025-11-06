const express = require('express');
const authenticateToken = require('../middleware/auth');
const authorizeRoles = require('../middleware/roleAuth');

const router = express.Router();

// User profile - accessible by all authenticated users
router.get('/user-profile', authenticateToken, authorizeRoles('Admin', 'Moderator', 'User'), (req, res) => {
  res.json({
    message: `Welcome to your profile, ${req.user.username}`,
    user: req.user
  });
});

// Public user information - accessible by all roles
router.get('/users/:id', authenticateToken, (req, res) => {
  res.json({
    message: 'User public profile',
    userId: req.params.id,
    // In real app, fetch user data from database
  });
});

module.exports = router;
