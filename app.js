const config = require("./src/config");
const express = require("express");
const cors = require("cors");

// Import routes, controllers etc.
const routes = require("./src/routes");
require("./src/adapters").db; // Adjust the path as needed
const errorHandlerUtil = require("./src/utils/errorHandler.util");

// Load configuration settings
const port = config.PORT

// Create an Express application
const app = express();

// Middlewares
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define your routes and controllers
app.use("/api/test", routes.testRoute);
app.use("/api/user", routes.userRoute);


// Start the server
async function startServer() {
  try {
    // await connect(); // Establish the database connection
    app.listen(port, () => {
      console.info(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}


// Error middleware & exception handler
errorHandlerUtil(app);

startServer();
