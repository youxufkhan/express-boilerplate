const testFunc = async (req, res) => {
  console.log("TestFunc");
  res.send({ code: 200, message: "success", status: true });
};

module.exports = {
  testFunc,
};
