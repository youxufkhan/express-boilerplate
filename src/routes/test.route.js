const express = require("express");

const { testController } = require("../controllers");

const router = express.Router();
console.log("test route registered");

router.get("/test1", testController.testFunc);

module.exports = router;
