const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./src/config')
const routes = require('./src/routes')
// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Load configuration settings
const dbUrl = config.get('DATABASE_URL');
const port = config.get('PORT');

// Define your routes and controllers
app.use('/api/test', routes.testRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});