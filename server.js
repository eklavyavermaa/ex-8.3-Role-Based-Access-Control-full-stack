const express = require('express');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const moderatorRoutes = require('./routes/moderator');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', authRoutes);
app.use('/', adminRoutes);
app.use('/', userRoutes);
app.use('/', moderatorRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'RBAC System API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
