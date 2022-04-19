const express = require("express");

const router = express.Router();

router.use("/pi", require("./v1/pi"));

router.use("/circumference", require("./v1/circumf") )

module.exports = router;
