const { apm } = require("../adapters");
const { logger } = require("../helpers");

module.exports = (app) => {
  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    logger.error("Error:", err);
    apm.captureError(err);

    // Define a custom error response object
    const errorResponse = {
      message: "Internal Server Error",
    };

    // Determine the HTTP status code based on the error
    const statusCode = err.status || 500;
    // Set the response status code and send the error response
    res.status(statusCode).json(errorResponse);
  });

  // eslint-disable-next-line no-undef
  process.on("uncaughtException", (error) => {
    logger.error("Uncaught Exception:", error);
    apm.captureError(error);
    // Perform any necessary cleanup or logging here

    // Terminate the application with a non-zero exit code
    // eslint-disable-next-line no-undef
    process.exit(1);
  });

  apm.handleUncaughtExceptions((error) => {
    logger.error("Uncaught Exception:", error);
    apm.captureError(error);
    // Perform any necessary cleanup or logging here
  })
};
