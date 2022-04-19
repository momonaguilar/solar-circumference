const express = require("express");
const router = express.Router();
const { addPiPrecision, getPiValue, format } = require('../../utils/util')

router.put("/addPrecision", async (req, res) => {
    let latestPiValue = await addPiPrecision();
    return res.json({
        newPi: latestPiValue.length === 1 ? latestPiValue : format(latestPiValue)
    });
})

router.get("/getValue", async(req, res) => {
    const latestPiValue = await getPiValue('string');
    return res.json({
        pi: latestPiValue,
    });
})

module.exports = router;