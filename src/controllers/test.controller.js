const testFunc = async (req, res) => {
  res.send({ code: 200, message: "success", status: true });
};

module.exports = {
  testFunc,
};
