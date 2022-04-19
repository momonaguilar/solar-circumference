const express = require("express");
const router = express.Router();

router.use("/pi", require("./v1/pi"));

module.exports = router;
