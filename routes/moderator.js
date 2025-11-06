const express = require('express');
const authenticateToken = require('../middleware/auth');
const authorizeRoles = require('../middleware/roleAuth');

const router = express.Router();

// Moderator panel - only accessible by Moderator and Admin roles
router.get('/moderator-panel', authenticateToken, authorizeRoles('Moderator', 'Admin'), (req, res) => {
  res.json({
    message: 'Welcome to the Moderator panel',
    user: req.user,
    moderatedContent: ['Post1', 'Post2', 'Comment1'] // Mock data
  });
});

// Content moderation route
router.get('/moderator/content', authenticateToken, authorizeRoles('Moderator', 'Admin'), (req, res) => {
  res.json({
    message: 'Content moderation interface',
    pendingReviews: 5 // Mock data
  });
});

module.exports = router;
