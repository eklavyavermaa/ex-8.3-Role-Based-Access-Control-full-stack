const bcrypt = require('bcryptjs');

// Mock user database
const users = [
  {
    id: 1,
    username: 'adminUser',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // admin123
    role: 'Admin'
  },
  {
    id: 2,
    username: 'moderatorUser',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // admin123
    role: 'Moderator'
  },
  {
    id: 3,
    username: 'regularUser',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // admin123
    role: 'User'
  }
];

// Helper function to find user by username
const findUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

// Helper function to find user by ID
const findUserById = (id) => {
  return users.find(user => user.id === id);
};

module.exports = {
  users,
  findUserByUsername,
  findUserById
};
