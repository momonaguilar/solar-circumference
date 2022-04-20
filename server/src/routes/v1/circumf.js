const express = require("express");
const router = express.Router();
const { computeSunCircumference } = require("../../utils/util");

router.get("/sun", async (req, res) => {
    try {
        const radius = 696340.00;
        const sunCircumf = await computeSunCircumference(radius);
        return res.json({
            sunCircumference: sunCircumf,
        });
    }
    catch (error) {
        return res.status(500).json({
            "message": "Unhandled error"
        });
    }
});


module.exports = router;