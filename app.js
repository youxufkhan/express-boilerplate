const { apm } = require('./src/adapters');
const express = require("express");
const { logger } = require("./src/helpers")

if(apm.isStarted()){
  console.log('APM is started');
}else{
  console.log('APM has not started');
}

const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes, controllers, config etc.
const config = require("./src/config");
const routes = require("./src/routes");
require("./src/adapters").db; // Adjust the path as needed
const errorHandlerUtil = require("./src/utils/errorHandler.util");

// Load configuration settings
const port = config.get("server.port");

// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(apm.middleware.connect());

// Define your routes and controllers
app.use("/api/test", routes.testRoute);
app.use("/api/user", routes.userRoute);


// Start the server
async function startServer() {
  try {
    // await connect(); // Establish the database connection
    app.listen(port, () => {
      logger.info(`Server is running on port ${port}`);
    });
  } catch (error) {
    logger.error("Error starting the server:", error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
}

// Error middleware & exception handler
errorHandlerUtil(app);

startServer();
