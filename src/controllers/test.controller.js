const { logger } = require("../helpers");

const testFunc = async (req, res) => {
  logger.log(" Inside TestFunc");
  res.send({ code: 200, message: "success", status: true });
};

module.exports = {
  testFunc,
};
