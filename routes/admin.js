const express = require('express');
const authenticateToken = require('../middleware/auth');
const authorizeRoles = require('../middleware/roleAuth');

const router = express.Router();

// Admin dashboard - only accessible by Admin role
router.get('/admin-dashboard', authenticateToken, authorizeRoles('Admin'), (req, res) => {
  res.json({
    message: 'Welcome to the Admin dashboard',
    user: req.user
  });
});

// Additional admin-only routes can be added here
router.get('/admin/users', authenticateToken, authorizeRoles('Admin'), (req, res) => {
  res.json({
    message: 'Admin user management panel',
    users: ['User1', 'User2', 'User3'] // Mock data
  });
});

module.exports = router;
