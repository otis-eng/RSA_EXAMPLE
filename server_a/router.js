const router = require("express").Router();
const {sendData,getData} = require("./controller");
router.get('/get-data',sendData);
router.get('/send-data',getData);

module.exports = router;