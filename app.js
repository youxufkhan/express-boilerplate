const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes, controllers, config etc.
const config = require("./src/config");
const routes = require("./src/routes");
require("./src/config/db"); // Adjust the path as needed
const errorHandlerUtil = require("./src/utils/errorHandler.util");

// Load configuration settings
const port = config.get("PORT");

// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define your routes and controllers
app.use("/api/test", routes.testRoute);
app.use("/api/user", routes.userRoute);

// Start the server
async function startServer() {
  try {
    // await connect(); // Establish the database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
}

// Error middleware & exception handler
errorHandlerUtil(app);

startServer();
