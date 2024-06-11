const express = require('express');
const articleRoutes = require('./routes/articleRoutes');
const setupSwagger = require('./config/swagger');
const sequelize = require('./config/dbConfig');
const cronJob = require('./scripts/cronJob');
// Create a new express application instance
const app = express();

// Swagger configuration
setupSwagger(app);

// Synchronize Sequelize with the database
sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch((error) => {
  console.error('Error synchronizing the database:', error);
});

// Middleware for handling routes
app.use('/articles', articleRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
